import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> storage = new HashMap<>();
    private final IDGenerator<ID> idGenerator;

    @SuppressWarnings("unchecked")
    public InMemoryRepository() {
        this.idGenerator = new IDGenerator();
    }

    @Override
    public T salvar(T entity) {
        if (entity.getId() == null) {
            ID newId = idGenerator.generate();
            try {
                java.lang.reflect.Field idField = entity.getClass().getDeclaredField("id");
                idField.setAccessible(true);
                idField.set(entity, newId);
            } catch (Exception e) {
                throw new RuntimeException("Não foi possível definir o ID", e);
            }
        }
        storage.put(entity.getId(), entity);
        return entity;
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return Optional.ofNullable(storage.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return Collections.unmodifiableList(new ArrayList<>(storage.values()));
    }

    @Override
    public void remover(ID id) {
        if (!storage.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada");
        }
        storage.remove(id);
    }

    private static class IDGenerator<ID> {
        private final AtomicLong counter = new AtomicLong(1);

        @SuppressWarnings("unchecked")
        public ID generate() {
            return (ID) Long.valueOf(counter.getAndIncrement());
        }
    }
}
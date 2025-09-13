// Product data for all versions
export const products = [
    {
        id: 1,
        title: "Notebook Gamer Ultra Pro",
        price: 8999.99,
        rating: 4.8,
        tag: "Novo",
        image: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=Notebook+Gamer"
    },
    {
        id: 2,
        title: "Smartphone X Pro Max",
        price: 5499.99,
        rating: 4.5,
        tag: "Promo",
        image: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=Smartphone+X"
    }, {
        id: 3,
        title: "Fones de Ouvido Bluetooth",
        price: 299.99,
        rating: 4.2,
        tag: "Novo",
        image: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=Fones+Bluetooth"
    }, {
        id: 4,
        title: "Smartwatch Fitness Tracker",
        price: 799.99,
        rating: 4.0,
        tag: "Promo",
        image: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=Smartwatch"
    }, {
        id: 5,
        title: "Câmera Digital Profissional",
        price: 3499.99,
        rating: 4.7,
        tag: "Novo",
        image: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=Câmera+Digital"
    }, {
        id: 6,
        title: "Tablet Ultra HD 10",
        price: 1899.99,
        rating: 4.3,
        tag: "Promo",
        image: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=Tablet+Ultra+HD"
    }
];

export const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}; export const formatRating = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
};
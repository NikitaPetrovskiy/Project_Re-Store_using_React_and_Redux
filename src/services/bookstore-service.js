export default class BookstoreService {
    data = [
        {
            id: 1,
            title: `You don't known JS`,
            author: `kyle simpson`,
            price: 42,
            coverImage: `https://images-eu.ssl-images-amazon.com/images/I/41kn-mEpe6L.jpg`
        },
        {
            id: 2,
            title: `React in action`,
            author: `Mark Tielens Thomas`,
            price: 35,
            coverImage: `https://images-na.ssl-images-amazon.com/images/I/41SVa0su8tL._SX396_BO1,204,203,200_.jpg`
        },
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 1000);
        });
    };
};

const { createApp, ref } = Vue;

createApp({
  setup() {
    const cart = ref(0);

    const addToCart = (product) => {
      cart.value += 1;
      let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = storedCart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        storedCart.push({
          id: product.id,
          title: product.title,
          description: product.description,
          image: product.image,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(storedCart));
    };

    const products = ref([
      {
        id: 1,
        title: "Produto 1",
        description: "Descrição do Produto 1",
        image: "assets/images/image1.png",
        inStock: 10,
      },
      {
        id: 2,
        title: "Produto 2",
        description: "Descrição do Produto 2",
        image: "assets/images/image2.png",
        inStock: 5,
      },
      {
        id: 3,
        title: "Produto 3",
        description: "Descrição do Produto 3",
        image: "assets/images/image3.png",
        inStock: 0,
      },
      {
        id: 4,
        title: "Produto 4",
        description: "Descrição do Produto 4",
        image: "assets/images/image4.png",
        inStock: 3,
      },
      {
        id: 5,
        title: "Produto 5",
        description: "Descrição do Produto 5",
        image: "assets/images/image5.png",
        inStock: 10,
      },
      {
        id: 6,
        title: "Produto 6",
        description: "Descrição do Produto 6",
        image: "assets/images/image6.png",
        inStock: 10,
      },
      {
        id: 7,
        title: "Produto 7",
        description: "Descrição do Produto 7",
        image: "assets/images/image7.png",
        inStock: 10,
      },
      {
        id: 8,
        title: "Produto 8",
        description: "Descrição do Produto 8",
        image: "assets/images/image8.jpeg",
        inStock: 10,
      },
      {
        id: 9,
        title: "Produto 9",
        description: "Descrição do Produto 9",
        image: "assets/images/image9.jpeg",
        inStock: 10,
      },
      {
        id: 10,
        title: "Produto 10",
        description: "Descrição do Produto 10",
        image: "assets/images/image10.jpeg",
        inStock: 10,
      },
    ]);

    return {
      cart,
      products,
      addToCart,
    };
  },
}).mount("#app");

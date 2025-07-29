import prisma from "../lib/db"

async function main() {
    await prisma.product.createMany({
        data: datas
    })
}

main()
    .then(() => { console.log('Seeding complete.') })
    .catch(e => {
        console.log(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

var datas = [
    {
        title: "Classic Leather Backpack",
        price: 89.99,
        image: "/images/bags/backpack.jpg",
        category: "Bags",
    },
    {
        title: 'Canvas Tote Bag',
        price: 25.50,
        image: '/images/bags/tote.jpg',
        category: 'Bags',
    },

    // Drinkware
    {
        title: 'Insulated Water Bottle',
        price: 19.99,
        image: '/images/drinkware/bottle.jpg',
        category: 'Drinkware',
    },
    {
        title: 'Ceramic Coffee Mug',
        price: 12.00,
        image: '/images/drinkware/mug.jpg',
        category: 'Drinkware',
    },

    // Electronics
    {
        title: 'Wireless Earbuds',
        price: 59.99,
        image: '/images/electronics/earbuds.jpg',
        category: 'Electronics',
    },
    {
        title: 'Bluetooth Speaker',
        price: 34.99,
        image: '/images/electronics/speaker.jpg',
        category: 'Electronics',
    },

    // Footware
    {
        title: 'Running Shoes',
        price: 74.90,
        image: '/images/footware/shoes1.jpg',
        category: 'Footware',
    },
    {
        title: 'Canvas Sneakers',
        price: 48.00,
        image: '/images/footware/sneakers.jpg',
        category: 'Footware',
    },

    // Headwear
    {
        title: 'Baseball Cap',
        price: 15.99,
        image: '/images/headwear/cap.jpg',
        category: 'Headwear',
    },
    {
        title: 'Beanie',
        price: 13.49,
        image: '/images/headwear/beanie.jpg',
        category: 'Headwear',
    },

    // Hoodies
    {
        title: 'Pullover Hoodie',
        price: 39.95,
        image: '/images/hoodies/pullover.jpg',
        category: 'Hoodies',
    },
    {
        title: 'Zipper Hoodie',
        price: 42.00,
        image: '/images/hoodies/zipper.jpg',
        category: 'Hoodies',
    },

    // Jackets
    {
        title: 'Bomber Jacket',
        price: 65.50,
        image: '/images/jackets/bomber.jpg',
        category: 'Jackets',
    },
    {
        title: 'Windbreaker',
        price: 58.00,
        image: '/images/jackets/windbreaker.jpg',
        category: 'Jackets',
    },

    // Kids
    {
        title: 'Kids Graphic Tee',
        price: 18.75,
        image: '/images/kids/tee.jpg',
        category: 'Kids',
    },
    {
        title: 'Kids Hoodie',
        price: 29.99,
        image: '/images/kids/hoodie.jpg',
        category: 'Kids',
    },

    // Pets
    {
        title: 'Dog Bandana',
        price: 9.99,
        image: '/images/pets/bandana.jpg',
        category: 'Pets',
    },
    {
        title: 'Pet Hoodie',
        price: 17.99,
        image: '/images/pets/hoodie.jpg',
        category: 'Pets',
    },

    // Shirts
    {
        title: 'Classic White T-Shirt',
        price: 14.00,
        image: '/images/shirts/white.jpg',
        category: 'Shirts',
    },
    {
        title: 'Graphic Tee',
        price: 18.00,
        image: '/images/shirts/graphic.jpg',
        category: 'Shirts',
    },

    // Stickers
    {
        title: 'Laptop Sticker Pack',
        price: 6.50,
        image: '/images/stickers/laptop.jpg',
        category: 'Stickers',
    },
    {
        title: 'Waterproof Sticker Set',
        price: 7.00,
        image: '/images/stickers/waterproof.jpg',
        category: 'Stickers',
    },
]
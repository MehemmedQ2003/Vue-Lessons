const { createApp } = Vue

const app = createApp({})

app.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: false
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" alt="" width="300">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inStock">In Stock</p>
                <p v-else>Out of stock</p>
                <p>Shiping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details" :key="detail">
                        {{ detail }}
                    </li>
                </ul>

                <div v-for="(variant, index) in variants" :key="variant.variantId">
                    <p :style="{
                        backgroundColor: variant.variantColor,
                      }" class="color-box" v-on:click="updateProduct(index)">
                    </p>
                </div>

                <button 
                    v-on:click="addToCart()" 
                    :disabled="!inStock" 
                    :class="{ disabledButton: !inStock }">
                    Add to Cart
                </button>

                <div class="cart">
                    <p>Cart ({{ cart }})</p>
                </div>
            </div>
        </div>
      `,
    data() {
        return {
            brand: "Vue Mastery",
            premium: false,
            product: "T-Shirt",
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "https://vue-mastery-course-app.vercel.app/assets/images/socks_green.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "https://vue-mastery-course-app.vercel.app/assets/images/socks_blue.jpg",
                    variantQuantity: 0
                }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

app.mount("#app")

const loadHomeProducts = () => {
    const productsUrl = "https://fakestoreapi.com/products";
    fetch(productsUrl)
        .then(res => res.json())
        .then(data => displayHomeProducts(data))
}

const displayHomeProducts = (products) => {
    // console.log(products)
    // get the home product container and make it empty
    const homeProductContainer = document.getElementById("product-container");
    homeProductContainer.innerHTML = "";

    //get the first 3 products for homepage
    const firstThreeProducts = products.slice(0, 3);

    for (let product of firstThreeProducts) {
        // console.log(product)
        const homeProductDiv = document.createElement('div');
        homeProductDiv.classList.add("card", "bg-base-100", "max-w-96", "shadow-sm");
        homeProductDiv.innerHTML = `

        <figure class="bg-[#E4E6EA] p-6 h-full">
                        <div class="w-1/2">
                            <img src=${product.image} alt="Shoes" />
                        </div>
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between">
                            <div class="badge bg-[#D3D8F8] text-[#4E44B5]">${product.category}</div>
                            <div class="flex justify-end items-center gap-1">
                                <i class="fa-solid fa-star text-yellow-300"></i>
                                <span>${product.rating.rate}</span>
                                <span>(${product.rating.count})</span>
                            </div>
                        </div>
                        <h2 class="card-title text-lg">
                            ${product.title}
                        </h2>
                        <h2 class="product-price text-md font-semibold">$${product.price}</h2>
                        <div class="card-actions justify-between">
                            <div class="badge badge-outline py-4 flex flex-grow cursor-pointer">
                                <i class="fa-regular fa-eye"></i> Details
                            </div>
                            <div class="badge badge-outline py-4 bg-[#513BF4] text-white flex flex-grow cursor-pointer">
                                <i class="fa-solid fa-cart-plus"></i>
                                Add
                            </div>
                        </div>
                    </div>

        `

        homeProductContainer.append(homeProductDiv);
    }
}

loadHomeProducts()

// load all products

const loadAllProducts = () => {
    const productsUrl = "https://fakestoreapi.com/products";
    fetch(productsUrl)
        .then(res => res.json())
        .then(data => displayAllProducts(data))
}

const displayAllProducts = (products) => {
    // console.log(products)
    // get the home product container and make it empty
    const allProductContainer = document.getElementById("all-product-container");
    allProductContainer.innerHTML = "";

    for (let product of products) {
        // console.log(product)
        const allProductDiv = document.createElement('div');
        allProductDiv.classList.add("card", "bg-base-100", "max-w-96", "shadow-sm");
        allProductDiv.innerHTML = `

        <figure class="bg-[#E4E6EA] p-6 h-full">
                        <div class="w-1/2">
                            <img src=${product.image} alt="Shoes" />
                        </div>
                    </figure>
                    <div class="card-body p-2 h-full">
                        <div class="flex justify-between">
                            <div class="badge bg-[#D3D8F8] p-1 text-[#4E44B5] text-sm h-auto text-center">${product.category}</div>
                            <div class="flex justify-end items-center gap-1">
                                <i class="fa-solid fa-star text-yellow-300"></i>
                                <span>${product.rating.rate}</span>
                                <span>(${product.rating.count})</span>
                            </div>
                        </div>
                        <h2 class="card-title text-lg">
                            ${product.title}
                        </h2>
                        <h2 class="product-price text-md font-semibold">$${product.price}</h2>
                        <div class="card-actions justify-between">
                            <div class="badge badge-outline py-4 flex flex-grow cursor-pointer">
                                <i class="fa-regular fa-eye"></i> Details
                            </div>
                            <div class="badge badge-outline py-4 bg-[#513BF4] text-white flex flex-grow cursor-pointer">
                                <i class="fa-solid fa-cart-plus"></i>
                                Add
                            </div>
                        </div>
                    </div>

        `

        allProductContainer.append(allProductDiv);
    }
}

loadAllProducts()

const loadProductsCategory = () =>{
    const productCategoryUrl = "https://fakestoreapi.com/products/categories";
    fetch(productCategoryUrl)
    .then(res => res.json())
    .then(data => displayAllCategories(data))
}

const displayAllCategories = (categories) =>{

    const productCategoriesContainer = document.getElementById("product-categories");
    productCategoriesContainer.innerHTML = "";

    for(let category in categories){
        console.log(categories[category]);
        const categoriesItem = document.createElement('li');
        categoriesItem.classList.add("border", "border-gray-400", "rounded-xl", "px-4", "py-1", "hover:bg-[#513BF4]", "hover:text-white", "transition")
        categoriesItem.innerHTML = `
        <a href="">${categories[category]}</a>
        `

        productCategoriesContainer.append(categoriesItem);
    }
}

loadProductsCategory();
let section3=document.querySelector('.section-3')

let vegitable=[]
fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>{
        let products=data
        for (let i = 0; i < products.length; i++) {
            console.log(products[i]);

            let productImg=products[i].images
            if(products[i].category=='vegetable'){
                let productId=products[i].id
                let productName=products[i].name
                let productPrice=products[i].price 
                let productMrp=products[i].mrp
                let productImg=products[i].images
                console.log(productImg);
                console.log(productId);
                 
            }
            // else if(products[i].category=='fruits'){
            //     let productId=products[i].id
            //     let productName=products[i].name
            //     let productPrice=products[i].price 
            //     let productMrp=products[i].mrp
            // }

    // -----------------------------------------------------------------------//
            //Element creation part

        // main div for products details show
            let productDiv=document.createElement('div')
            productDiv.setAttribute('class','products')
        // inner div for the product 
            let productInnerDiv=document.createElement('div')
            productInnerDiv.setAttribute('class','productsInnerDiv')
        // below div for show the icon 
            let iconDiv=document.createElement('div')
            iconDiv.setAttribute('class','iconsdiv')
            
            let offerImg=document.createElement('img')
            offerImg.src='image/Star1.svg';
        // section3.append(offerImg)
        // offerImg.setAttribute('class','offerImg')
            let whisticonDiv=document.createElement('div')
            whisticonDiv.setAttribute('class','heart')
            let hearticon=document.createElement('i')
            hearticon.setAttribute('class','fa-regular fa-heart')

        // below div for show the products main image
            let productImageDiv=document.createElement('div')
            productImageDiv.setAttribute('class','productImg')
            let productImage=document.createElement('img')
            productImage.src=productImg

        // below div for show the product price and discount 
            let productRateDiv=document.createElement('div')
            productRateDiv.setAttribute('class','productRate')
            let productName=document.createElement('h3')
            let rateTag=document.createElement('span')
            let discountTag=document.createElement('del')

        //below div for the buttons
            let btnDiv=document.createElement('div')
            btnDiv.setAttribute('class','btnsection')
            let weightBtn=document.createElement('button')
            let addBtn=document.createElement('button')

    // -----------------------------------------------------------------------//
            // assigning part
            section3.appendChild(productDiv)
            productDiv.appendChild(productInnerDiv)
            productInnerDiv.appendChild(iconDiv)
            iconDiv.appendChild(offerImg)
            iconDiv.appendChild(whisticonDiv)
            whisticonDiv.append(hearticon)

            productInnerDiv.appendChild(productImageDiv)
            productImageDiv.append(productImage)

            productInnerDiv.appendChild(productRateDiv)


        }

    })
    

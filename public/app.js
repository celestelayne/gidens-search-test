console.log('this works');


/*
const searchInput = document.getElementById('searchTrigger');
const searchBtn = document.getElementById("searchBtn");

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const renderSearchResultsToPage = (data) => {

        const searchResults = document.getElementById("results");
    
        for (let i = 0; i < data.length; i++) {
            
            console.log(data[i])
            let pdfName;
            pdfName = data[i].document.derivedStructData.fields.link.stringValue
            let arr = pdfName.split('/')
            // console.log(arr)
            // console.log(arr[arr.length-1])
    
    
            let p = document.createElement("p");
            p.textContent = arr[arr.length-1]
            searchResults.appendChild(p)
        }
    }

    // event handler function
    const searchBtnFn = async (event) => {
        event.preventDefault()
        console.log(searchInput.value)

        const response = await fetch('/search', {
            method: "POST",
            headers: {'Content-Type': 'application/JSON' }
        })

        // console.log('made it to the client side', response)
        const results = await response.json()
        renderSearchResultsToPage(results)
    }

});

// button click
searchBtn.addEventListener("click", searchBtnFn);
*/
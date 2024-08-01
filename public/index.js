import data from "./data";


const HomeScreen = {
    render: async() => {
        const products = data;

        const response = await fetch("http://localhost:8083/", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response || response.ok) {
            return `<div>Error in getting data</div>`;
        }
        const product = await response.json();
    }
}
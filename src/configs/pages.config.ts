
const baseUrl = "/"

class PagesConfig {
	home = baseUrl + ""
	login = baseUrl + "login/"
	register = baseUrl + "register/"
	products = baseUrl + "products/"
	product = baseUrl + "product/:productId"
}

export const pagesConfig = new PagesConfig()
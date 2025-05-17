import LoginPage from '../support/pages/LoginPage';
import ProductPage from '../support/pages/ProductPage';


import CartPage from '../support/pages/CartPage';
import WishlistPage from '../support/pages/WishlistPage';
// In your test file (like cypress/e2e/ASS.cy.js)
import NavigationPage from '../support/pages/NavigationPage';


import CheckoutPage from '../support/pages/CheckoutPage';
import ContactPage from '../support/pages/ContactPage';

import FooterPage from '../support/pages/FooterPage';

const url = "https://www.demoblaze.com/";

describe('E-commerce Website End-to-End Tests', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const wishlistPage = new WishlistPage();
  const navigationPage = new NavigationPage();


  const checkoutPage = new CheckoutPage();
  const contactPage = new ContactPage();
  const footerPage = new FooterPage();

  beforeEach(() => {
    cy.visit(url);
    cy.wait(2000)
  });

  it('Login functionality / Signup', () => {
    loginPage.signup('mahi456', 'password123');
    cy.wait(2000)
    loginPage.login('mahi456', 'password123');
    cy.wait(2000)
  });

  it('Product search and filtering', () => {
    productPage.searchProduct('Samsung');
    productPage.applyFilter('Phones');
    productPage.verifySearchResults('Samsung');
    cy.wait(2000)
  });

 it('Add to cart, change quantity, apply filter', () => {
   cartPage.addProductsToCart()
   cy.wait(2000)
  });
  it('Wishlist functionality', () => {
    productPage.selectProduct('Nokia lumia 1520');
    wishlistPage.addToWishlist();
    wishlistPage.verifyWishlistContains('Nokia lumia 1520');
    cy.wait(2000)
  });

  it('Navigating between different pages', () => {
    navigationPage.goToHome();
    // navigationPage.goToContact();
    navigationPage.goToCart();
    // navigationPage.goToAboutUs();
  });

  it('Checkout process', () => {
  productPage.selectProduct('Nexus 6');
  cy.get('.btn-success').click();  // Add Nexus 6 to cart
  cy.on('window:alert', (txt) => {
    expect(txt).to.equal('Product added');
  });
  cartPage.openCart();

  checkoutPage.completeCheckout({
    name: 'Rajeev Singh',
    country: 'India',
    city: 'Delhi',
    creditCard: '1234 5678 9876 5432',
    month: '12',
    year: '2025'
  });

  checkoutPage.verifyOrderSuccess();
});



  // it('Contact us form', () => {
  //  cy.get(':nth-child(2) > .nav-link').click();
  // });

  it('Footer section links', () => {
     footerPage.verifyFooterLinks();
  });
});

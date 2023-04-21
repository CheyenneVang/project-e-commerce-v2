// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// jest tests
// note: change "test": command in package.json "scripts" when switching from using cypress to jest
const mockData = [
  {
      "id": 1,
      "image": "https://m.media-amazon.com/images/I/81AHoE-QgFL._AC_SX679_.jpg",
      "alt": "BLUEAIR Bedroom Air Purifier",
      "product_name": "BLUEAIR Bedroom Air Purifier, Air Cleaner Dust Pet Dander Smoke Mold Pollen Allergen, Odor Removal, for Home Office Nursery Kitchen, Washable Pre Filter, HEPASilent, Medium Room, Blue 311 (Non-Auto)",
      "price": 229.99,
      "product_description": "SIMPLE ONE-BUTTON CONTROL, CLEAN AIR IN MINUTES, ONE OF THE QUIETEST AIR PURIFIERS, COMBAT ALLERGENS, REMOVES ODOR & PARTICLES, INDEPENDENTLY TESTED FOR PERFORMANCE & SAFETY, ZERO OZONE, GENUINE FILTERS FOR OPTIMAL PERFORMANCE"
  },
  {
      "id": 2,
      "image": "https://m.media-amazon.com/images/I/71tpOZEW0eL._AC_SX679_.jpg",
      "alt": "LEVOIT Air Purifiers for Bedroom Home",
      "product_name": "LEVOIT Air Purifiers for Bedroom Home, HEPA Filter Cleaner with Fragrance Sponge for Better Sleep, Filters Smoke, Allergies, Pet Dander, Odor, Dust, Office, Desktop, Portable, Core Mini, White",
      "price": 49.99, 
      "product_description": "REFRESH & RELAX, QUIET OPERATION, AROMATHERAPY, SAVE SPACE"
  }
];

describe('second test', () => {
  it('length of array should return 2 products', () => {
    expect(mockData).toHaveLength(2);
  });
});

const sampleData = {
  "id": 1,
  "image": "https://m.media-amazon.com/images/I/81AHoE-QgFL._AC_SX679_.jpg",
  "alt": "BLUEAIR Bedroom Air Purifier",
  "product_name": "BLUEAIR Bedroom Air Purifier, Air Cleaner Dust Pet Dander Smoke Mold Pollen Allergen, Odor Removal, for Home Office Nursery Kitchen, Washable Pre Filter, HEPASilent, Medium Room, Blue 311 (Non-Auto)",
  "price": 229.99,
  "product_description": "SIMPLE ONE-BUTTON CONTROL, CLEAN AIR IN MINUTES, ONE OF THE QUIETEST AIR PURIFIERS, COMBAT ALLERGENS, REMOVES ODOR & PARTICLES, INDEPENDENTLY TESTED FOR PERFORMANCE & SAFETY, ZERO OZONE, GENUINE FILTERS FOR OPTIMAL PERFORMANCE"
};

describe('testing if properties are read', () => {
  it('has image property', () => {
    expect(sampleData).toHaveProperty('image');
  });

  it('has price property and correct value', () => {
    expect(sampleData).toHaveProperty('price', 229.99);
  });

  it('identify incorrect properties', () => {
    expect(sampleData).not.toHaveProperty('pool');
  });
});
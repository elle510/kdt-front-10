// @ts-check

// 이 파일 상단의 '// @ts-check' 주석은 Visual Studio Code와 같은 에디터에게
// 이 JavaScript 파일을 TypeScript처럼 타입 검사를 하도록 지시합니다.
// JSDoc 주석과 함께 사용하면 타입 안정성이 매우 높아집니다.

/**
 * 상품 정보를 나타내는 객체 타입입니다.
 * @typedef {object} Product
 * @property {number} id - 상품의 고유 ID.
 * @property {string} name - 상품 이름.
 * @property {number} price - 상품 가격.
 * @property {boolean} inStock - 재고 여부.
 */

/**
 * 상품의 총 가격을 계산합니다.
 * @param {Product} product - 상품 객체.
 * @param {number} quantity - 수량.
 * @returns {number} 총 가격.
 */
function calculateTotal(product, quantity) {
  // --- 오류 예시 2: 존재하지 않는 속성 접근 ---
  // @ts-check가 활성화되면, Product 타입에 정의되지 않은 'discount' 속성에
  // 접근하려고 할 때 에디터에서 오류를 표시합니다.
  // 에디터 오류: Property 'discount' does not exist on type 'Product'.
  // const discountRate = product.discount || 0;

  if (!product.inStock) {
    return 0;
  }
  return product.price * quantity;
}

/** @type {Product} */
const myProduct = {
  id: 1,
  name: "노트북",
  price: 1500000,
  inStock: true,
};

// --- 정상적인 사용 예시 ---
const totalPrice = calculateTotal(myProduct, 2);
console.log(`정상 계산된 총 가격: ${totalPrice}`);

// --- 오류 예시 1: 잘못된 타입의 인자 전달 ---
// calculateTotal 함수의 두 번째 인자는 {number} 타입으로 지정되었습니다.
// 하지만 문자열 '2'를 전달하고 있습니다.
// @ts-check는 이 문제를 감지하고 에디터에 오류를 표시합니다.
// 에디터 오류: Argument of type 'string' is not assignable to parameter of type 'number'.
const wrongTotalPrice = calculateTotal(myProduct, "2");
console.log(`잘못된 타입으로 계산된 총 가격: ${wrongTotalPrice}`);

// --- 오류 예시 3: 객체 생성 시 잘못된 속성 타입 ---
// Product 타입의 price는 {number}로 정의되었지만, 문자열을 할당했습니다.
// @ts-check는 이 불일치를 감지하고 오류를 표시합니다.
// 에디터 오류: Type 'string' is not assignable to type 'number'.
/** @type {Product} */
const anotherProduct = {
  id: 2,
  name: "키보드",
  price: "70000", // <- 여기가 문제입니다.
  inStock: true,
};

const anotherTotal = calculateTotal(anotherProduct, 3);
console.log(`다른 상품의 총 가격: ${anotherTotal}`);

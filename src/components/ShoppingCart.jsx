import React, { useState } from 'react';

// 자식 컴포넌트: 상품 목록 표시 및 버튼
function CartList({ items, onIncrease, onDecrease, onRemove }) {
  return (
    <div>
      {items.map(({ id, name, price, quantity }) => (
        <div key={id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ flex: 3 }}>{name}</div>
          <div style={{ flex: 2 }}>{price.toLocaleString()} 원</div>
          <div style={{ flex: 2, display: 'flex', alignItems: 'center' }}>
            <button onClick={() => onDecrease(id)} disabled={quantity <= 1}>-</button>
            <span style={{ margin: '0 8px' }}>{quantity}</span>
            <button onClick={() => onIncrease(id)}>+</button>
          </div>
          <div style={{ flex: 2 }}>{(price * quantity).toLocaleString()} 원</div>
          <div style={{ flex: 1 }}>
            <button onClick={() => onRemove(id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// 자식 컴포넌트: 총 수량 및 총 가격 표시
function CartSummary({ totalQuantity, totalPrice }) {
  return (
    <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
      <div>총 수량: {totalQuantity} 개</div>
      <div>총 결제금액: {totalPrice.toLocaleString()} 원</div>
    </div>
  );
}

export default function ShoppingCart() {
  const initialCartData = [
    { id: 1, name: '기계식 키보드', price: 120000, quantity: 1 },
    { id: 2, name: '무선 마우스', price: 85000, quantity: 2 },
    { id: 3, name: 'QHD 모니터', price: 350000, quantity: 1 }
  ];

  const [cartItems, setCartItems] = useState(initialCartData);

  const handleIncrease = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h2>장바구니</h2>
      <CartList items={cartItems} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} />
      <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
    </div>
  );
}
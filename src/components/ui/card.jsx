import React, { useState } from "react";

export default function Card() {
  const [Count, setCount] = useState(1000);
  const [Error, setError] = useState(false);
  const [Purcharse, setPurcharse] = useState(false);
  const [Amount, setAmount] = useState(0);
  const [Cart, setCart] = useState([]);
  const [TotallyLost, setTotallyLost] = useState([]);

  const ItemsInCart = Cart.length;

  function addMoney() {
    setCount(Count + 500);
    setPurcharse(false);
  }

  function resetMoney() {
    setCount(1000);
    setPurcharse(false);
    setCart([]);
    setTotallyLost([]);
  }

  const applePrice = 760;
  const BananaPrice = 960;
  const OrangePrice = 605;
  const WatermelonPrice = 1500;

  function buyApple() {
    if (Count > applePrice) {
      setCount(Count - applePrice);
      setPurcharse(true);
      setAmount(applePrice);
      Cart.push("🍎");
      TotallyLost.push(applePrice);

      setError(false);
    } else {
      setPurcharse(false);

      setError(true);
    }
  }

  function buyBanana() {
    if (Count > BananaPrice) {
      setCount(Count - BananaPrice);
      setPurcharse(true);
      setAmount(BananaPrice);
      Cart.push("🍌");
      TotallyLost.push(BananaPrice);

      setError(false);
    } else {
      setPurcharse(false);

      setError(true);
    }
  }

  function buyOrange() {
    if (Count > OrangePrice) {
      setCount(Count - OrangePrice);
      setPurcharse(true);
      setAmount(OrangePrice);
      Cart.push("🍊");
      TotallyLost.push(OrangePrice);

      setError(false);
    } else {
      setPurcharse(false);

      setError(true);
    }
  }

  function buyWatermelon() {
    if (Count > WatermelonPrice) {
      setCount(Count - WatermelonPrice);
      setPurcharse(true);
      setAmount(WatermelonPrice);
      Cart.push("🍉");
      TotallyLost.push(WatermelonPrice);

      setError(false);
    } else {
      setPurcharse(false);

      setError(true);
    }
  }

  return (
    <>
      <div className={Error ? "alertActive" : "alert"}>
        you dont have this money
      </div>
      <div className="card-container">
        <h1>$ {Count}</h1>
        <h4 className={Purcharse ? "active" : "inactive"}>-$ {Amount}</h4>
        <div className="buttons">
          <button onClick={addMoney}>More Money</button>
          <button onClick={resetMoney}>Reset</button>
        </div>
        <div className="Items">
          <div>
            <h2>Apple🍎</h2>
            <p>$760</p>
            <button onClick={buyApple}>Purcharse</button>
          </div>
          <div>
            <h2>Banana🍌</h2>
            <p>$960</p>
            <button onClick={buyBanana}>Purcharse</button>
          </div>
          <div>
            <h2>Orange🍊</h2>
            <p>$605</p>
            <button onClick={buyOrange}>Purcharse</button>
          </div>
          <div>
            <h2>Watermelon🍉</h2>
            <p>$1500</p>
            <button onClick={buyWatermelon}>Purcharse</button>
          </div>
        </div>
      </div>
      <div className="CartContainer">
        <div className="infoText">
          <h3>Carrito de compras</h3>
          <h6>Items totales: {ItemsInCart}</h6>
        </div>
        <div>{Cart}</div>
      </div>
      <div className="CostContainer">
        <div className="infoCostText">
          <h3>Historial de Gastos</h3>
          <h6>Gastos totales: {ItemsInCart}</h6>
        </div>
        <div className="Cost">
          <h5>{TotallyLost}</h5>
        </div>
      </div>
    </>
  );
}

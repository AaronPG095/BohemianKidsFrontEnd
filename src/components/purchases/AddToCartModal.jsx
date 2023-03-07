import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { FaShoppingBasket } from 'react-icons/fa';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ProductCheckBox from '../purchases/ProductCheckBox';

const AddToCartModal = ({
  setIsOpen,
  currentProductType,
  windowPositionY,
  productID,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <>
      <div
        className="darkBG middleOfPage"
        onClick={(event) => {
          event.stopPropagation();
          if (event.currentTarget === event.target) {
            setIsOpen(false);
          }
        }}
        style={{
          top: windowPositionY,
        }}
      >
        <div className="centered">
          <div className="modal_container">
            <div className="modal_closeBtn_container">
              <Link className="button_link" onClick={() => setIsOpen(false)}>
                <button className="modal_closeBtn">
                  <GrClose className="modal_closeBtn_icon" />
                </button>
              </Link>
            </div>

            {currentProductType === 'filter' ||
            currentProductType === 'espresso' ? (
              // Coffee Modal
              <div className="modal_content">
                <ProductCheckBox
                  currentProductType={currentProductType}
                  productID={productID}
                  setIsOpen={setIsOpen}
                />
              </div>
            ) : (
              // Equipment / Merchandise Modal
              <div className="modal_content">
                <ProductCheckBox
                  currentProductType={currentProductType}
                  productID={productID}
                  setIsOpen={setIsOpen}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartModal;

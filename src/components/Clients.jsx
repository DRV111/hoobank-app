import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((item) => (
          <div
            key={item.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={item.logo}
              alt={item}
              className="sm:w-[192px] w-[100px] object-contain"
            />
            <div className={`${styles.flexCenter} w-full`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

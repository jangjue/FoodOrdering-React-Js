import React from "react";

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currencyDisplay: "symbol",
      currency,
    })
      .format(price)
      .replace("MYR", "RM");
  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: "en-US",
  currency: "MYR",
};

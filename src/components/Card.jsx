import Button from "./Button";

const Card = ({ variant, image, title, description }) => {
  return (
    <div className={`card card--${variant} flex-column`}>
      <img src={image} alt="" width="64" height="40" className="card__image" />
      <div className="card__content flex-column">
        <div className="card__intro flex-column">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <Button variant={variant} />
      </div>
    </div>
  );
};

export default Card;

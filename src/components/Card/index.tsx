import hero from "../../assets/illustration-hero.svg";

const Card = () => (
  <>
    <img src={hero} alt="hero-img" />
    <main>
      <h1>order summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks and podcasts on any
        device anywhere you like!
      </p>
      <div className="plan">
        <aside>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
              <path
                fill="#717FA6"
                fillRule="nonzero"
                d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
              />
            </g>
          </svg>
          <div className="price">
            <h3 className="title">annual plan</h3>
            <h3>$59.99/year</h3>
          </div>
        </aside>
        <a href="#change" className="submit">
          change
        </a>
      </div>
      <button className="payment">Proceed to Payment</button>
      <a href="#cancel" className="cancel">
        cancel order
      </a>
    </main>
  </>
);

export default Card;

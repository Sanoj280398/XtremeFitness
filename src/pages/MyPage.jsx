import { Link, Navigate } from "react-router-dom";
import PageLayout from "./PageLayout.jsx";

const bookings = [
  { type: "Kardio", day: "Mandag", time: "08:00" },
  { type: "Crossfit", day: "Lørdag", time: "17:00" },
  { type: "Yoga", day: "Tirsdag", time: "10:00" },
];

const classes = [
  { type: "Boksning", day: "Fredag", time: "19:00" },
  { type: "Kardio", day: "Onsdag", time: "08:00" },
  { type: "Kardio", day: "Fredag", time: "08:00" },
  { type: "Yoga", day: "Tirsdag", time: "10:00" },
  { type: "Yoga", day: "Lørdag", time: "09:00" },
];

function MyPage() {
  if (sessionStorage.getItem("xf_customer_auth") !== "true") {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageLayout>
      <section className="mypage-hero">
        <div className="container">
          <p className="eyebrow">Velkommen tilbage</p>
          <h1>Min side</h1>
        </div>
      </section>
      <main className="mypage container">
        <section className="mypage__section">
          <p className="eyebrow">Abonnement</p>
          <h2>Mit abonnement</h2>
          <article className="mypage__subscription">
            <img
              src="/assets/images/subscriptionsHeader.png"
              alt="Standard Gym abonnement"
            />
            <div>
              <h3>Standard Gym</h3>
              <p>Dit aktive medlemskab</p>
              <Link to="/subscriptions" className="btn">
                Se abonnementer
              </Link>
            </div>
          </article>
        </section>
        <section className="mypage__section">
          <p className="eyebrow">Oversigt</p>
          <h2>Mine tilmeldinger</h2>
          <div className="mypage__table-wrap">
            <table className="mypage__table">
              <thead>
                <tr>
                  <th>Hold</th>
                  <th>Dag</th>
                  <th>Tid</th>
                  <th>Frameld</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={`${booking.type}-${booking.day}`}>
                    <td>{booking.type}</td>
                    <td>{booking.day}</td>
                    <td>{booking.time}</td>
                    <td>
                      <button aria-label={`Frameld ${booking.type}`}>×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mypage__section">
          <p className="eyebrow">Kalender</p>
          <h2>Holdtilmelding</h2>
          <div className="mypage__table-wrap">
            <table className="mypage__table">
              <thead>
                <tr>
                  <th>Hold</th>
                  <th>Dag</th>
                  <th>Tidspunkt</th>
                  <th>Tilmeld</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((item) => (
                  <tr key={`${item.type}-${item.day}-${item.time}`}>
                    <td>{item.type}</td>
                    <td>{item.day}</td>
                    <td>{item.time}</td>
                    <td>
                      <button
                        className="mypage__join"
                        aria-label={`Tilmeld ${item.type}`}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default MyPage;

import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import EventItem from "../../components/EventItem";
import styles from "../../styles/EventItem.module.css";

export default function index({ res }) {
  return (
    <Layout>
      <div className={styles.gridContainer}>
        {res.map((e) => (
          <EventItem
            key={e.id}
            vendor={e.vendor}
            performer={e.performer}
            date={e.date}
            time={e.time}
            slug={e.slug}
            info={""}
            image={e.image.formats.small.url}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/events?_sort=date:ASC `);
  const res = await data.json();

  return {
    props: { res },
    revalidate: 1,
  };
}

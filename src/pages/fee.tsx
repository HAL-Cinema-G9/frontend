import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Ticket } from '@/types/apiTypes';
import { css } from '@emotion/react';
import Image from 'next/image';

const styles = {
  feeContainer: css`
    padding: 20px;
    background-color: #c39be4;
    width: 100%;
    text-align: center;
  `,

  feeTable: css`
    font-size: 1.5rem;
    width: 60%;
    margin: 50px auto;
    background-color: #d8b7b79c;
    border-collapse: collapse;
    border: 1px solid #fff;
    table-layout: fixed;
    & tr {
      border: 1px solid #fff;
      height: 80px;
    }
    & th {
      border: 1px solid #fff;
      padding: 10px;
    }
    & td {
      border: 1px solid #fff;
      padding: 10px;
    }
  `,
};

type Props = {
  tickets: Ticket[];
};

const Fee = ({ tickets }: Props) => {
  return (
    <main>
      <Navbar />
      <div css={styles.feeContainer}>
        <Image
          src={'/images/ticket-icon.png'}
          alt={'ticket-icon'}
          height={150}
          width={150}
        />
        <table css={styles.feeTable}>
          <thead>
            <tr>
              <th>券種分類</th>
              <th>料金</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.name}</td>
                <td>{Math.floor(ticket.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Image
          src={'/images/movieLight-icon.png'}
          alt={'movieLight-icon'}
          height={100}
          width={100}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Fee;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/tickets`
  );
  const tickets: Ticket[] = await res.json();

  return {
    props: {
      tickets,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

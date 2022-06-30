// import axios from 'axios';
// import { showAlert } from './alert';
// const stripe = Stripe(
//   'pk_test_51KrGbNSCQH2KWIFa8sw9EfDPkU3wnUgoAKFyq0eiw7Tt5vTpS2vTNIkpgoGS3bWYQxrMNlSnh7eNSwgz5eRKIuNc004sitDGV1'
// );

// export const bookTour = async (tourId) => {
//   try {
//     //1) Get checkout session from API
//     const session = await axios(
//       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
//     );
//     console.log(session);
//     // await stripe.redirectToCheckout({
//     //   sessionId: session.data.session.id,
//     // });
//     //2) Create checkout form + create Credit Card for us
//   } catch (err) {
//     console.log(err);
//     showAlert('error', err);
//   }
// };

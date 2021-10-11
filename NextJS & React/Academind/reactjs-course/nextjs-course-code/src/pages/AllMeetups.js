import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://secure.meetupstatic.com/photos/event/8/5/4/d/highres_493834125.jpeg",
//     address: "Meetup Street 45, 123 Meetup City",
//     description:
//       "This is a amazing meetup which you definitely should not miss. It will be incredible.",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://secure.meetupstatic.com/photos/event/8/5/4/d/highres_493834125.jpeg",
//     address: "Meetup Street 45, 123 Meetup City",
//     description:
//       "This is a amazing meetup which you definitely should not miss. It will be incredible.",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-getting-started-84915-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []

        for (const key in data){
          const meetup = {
            id:"key",
            ...data[key]
          }
          meetups.push(meetup)
        }


        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetups </h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

function MyList() {
    // const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    //   ];
    //   const listItems = people.map(person => <li>{person}</li>);


      const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

      const chemists = people.filter(person =>
        person.profession === 'chemist'
      );

      const listItems = chemists.map(person =>
        <li>
           <img
             src={getImageUrl(person)}
             alt={person.name}
           />
           <p>
             <b>{person.name}:</b>
             {' ' + person.profession + ' '}
             known for {person.accomplishment}
           </p>
        </li>
      );
    return (
        <>
            {/* <ul>
                <li>Creola Katherine Johnson: mathematician</li>
                <li>Mario José Molina-Pasquel Henríquez: chemist</li>
                <li>Mohammad Abdus Salam: physicist</li>
                <li>Percy Lavon Julian: chemist</li>
                <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
            </ul> */}
            {/* {listItems} */}
            {/* <ul>{listItems}</ul>; */}
                <ul>{listItems}</ul>;

            

        </>
    )
}

export default MyList;
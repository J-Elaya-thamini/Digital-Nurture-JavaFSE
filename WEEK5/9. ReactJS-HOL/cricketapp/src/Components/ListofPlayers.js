function ListofPlayers() {

    const players = [

        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 68 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 65 },
        { name: "Ravindra Jadeja", score: 78 },
        { name: "R Ashwin", score: 55 },
        { name: "Mohammed Shami", score: 45 },
        { name: "Jasprit Bumrah", score: 62 },
        { name: "Mohammed Siraj", score: 58 },
        { name: "Kuldeep Yadav", score: 80 }

    ];

    const below70 = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            {players.map((player, index) => (

                <p key={index}>
                    {player.name} - {player.score}
                </p>

            ))}

            <h2>Players with Score Below 70</h2>

            {below70.map((player, index) => (

                <p key={index}>
                    {player.name} - {player.score}
                </p>

            ))}

        </div>

    );

}

export default ListofPlayers;
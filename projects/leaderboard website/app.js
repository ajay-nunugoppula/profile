document.addEventListener('DOMContentLoaded', function() {
    const leaderboardData = [
        { rank: 1, name: 'Done Laxmi Bhavani' },
        { rank: 1, name: 'Coder 7' },
        { rank: 1, name: 'Thakur Sai Prakash Singh' },
        { rank: 1, name: 'Sowmithra' },
        { rank: 1, name: 'Vedansh Sharma' },
        { rank: 1, name: 'Varshitha' },
        { rank: 2, name: 'Manideep' },
        { rank: 2, name: 'Nani' },
        { rank: 2, name: 'Anu' },
        { rank: 3, name: 'Vishmitha Sri' },
        { rank: 4, name: 'Meghana Gandhe' },
        { rank: 5, name: 'Harika Adepu' },
        { rank: 6, name: 'Siaaa_' },
        { rank: 7, name: 'Bhanu priya' },
        { rank: 8, name: 'Hasini Kota' },
        { rank: 8, name: 'Varsha' },
        { rank: 8, name: 'Varsha' },
        { rank: 8, name: 'Ashutosh' },
        { rank: 8, name: 'Shravya Jakkani' },
        { rank: 9, name: 'Arya' },
        { rank: 9, name: 'Raghuram Jella' },
        { rank: 9, name: 'SaiKalyan Jakkula' },
        { rank: 10, name: 'Rakesh Lingampelli' },
        { rank: 10, name: 'Srisairam V' },
        { rank: 10, name: 'Adarsh Yashoda' },
        { rank: 10, name: 'k ashitosh' },
        { rank: 11, name: 'Nikitha' },
        { rank: 11, name: 'Nicy' },
        { rank: 11, name: 'Sanjay Utchula' },
        { rank: 11, name: 'Guruharsha' },
        { rank: 11, name: 'Sai Rahul' }




    ];

    const rankingTable = document.querySelector('.ranking-table');

    // Clear existing content in rankingTable if needed
    rankingTable.innerHTML = '';

    leaderboardData.forEach(item => {
        const rankNumber = item.rank;
        const name = item.name;

        const row = document.createElement('div');
        row.classList.add(`ranking-table-row-leader-${rankNumber}`);
        row.classList.add('ranking-table-row');

        switch (rankNumber) {
            case 1:
                row.style.border = 'solid 0.125em #ecc81a';
                break;
            case 2:
                row.style.border = 'solid 0.125em #dbe2e8';
                break;
            case 3:
                row.style.border = 'solid 0.125em #dfdfd1';
                break;
            default:
                row.style.border = 'none';
                row.style.paddingLeft="45px";
                break;
        }

        const rankElement = document.createElement('div');
        rankElement.classList.add(`ranking-table-data-leader-${rankNumber}`);
        rankElement.classList.add('ranking-table-data-leader');
        if (rankNumber === 1) {
            const medal = document.createElement('div');
            medal.classList.add('medal-gold');
            rankElement.appendChild(medal);
        } else if (rankNumber === 2) {
            const medal = document.createElement('div');
            medal.classList.add('medal-silver');
            rankElement.appendChild(medal);
        } else if (rankNumber === 3) {
            const medal = document.createElement('div');
            medal.classList.add('medal-bronze');
            rankElement.appendChild(medal);
        } else {
            const rankNumberElement = document.createElement('div');
            rankNumberElement.textContent = rankNumber;
            rankElement.appendChild(rankNumberElement);
        }

        const nameElement = document.createElement('div');
        nameElement.classList.add('ranking-table-data');
        nameElement.textContent = name;

        const progressElement = document.createElement('div');
        progressElement.classList.add('ranking-table-data');
        progressElement.innerHTML = '<div class="complete"></div>';

        row.appendChild(rankElement);
        row.appendChild(nameElement);
        row.appendChild(progressElement);

        rankingTable.appendChild(row);
    });
});

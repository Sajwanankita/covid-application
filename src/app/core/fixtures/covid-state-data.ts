import { CovidStateReport } from '../models/covid-state-report';

export function getCovidStateData(): CovidStateReport {
    return {
        statewise: [
            {
                active: '26049',
                confirmed: '37345',
                deaths: '1229',
                deltaconfirmed: '83',
                deltadeaths: '6',
                deltarecovered: '43',
                lastupdatedtime: '02/05/2020 12:47:44',
                recovered: '10063',
                state: 'Total',
                statecode: 'TT',
                statenotes: ''
            },
            {
                active: '9142',
                confirmed: '11506',
                deaths: '485',
                deltaconfirmed: '0',
                deltadeaths: '0',
                deltarecovered: '0',
                lastupdatedtime: '01/05/2020 23:03:45',
                recovered: '1879',
                state: 'Maharashtra',
                statecode: 'MH',
                statenotes: ''
            }
        ]
    };
}

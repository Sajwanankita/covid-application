export interface CovidStateReport {
    cases_time_series?: Array<CasesTimeSeries>;
    statewise: Array<StateWiseReport>;
    tested?: Array<TestReport>;
}

export interface CasesTimeSeries {
    dailyconfirmed: string;
    dailydeceased: string;
    dailyrecovered: string;
    date: string;
    totalconfirmed: string;
    totaldeceased: string;
    totalrecovered: string;
}

export interface StateWiseReport {
    active: string;
    confirmed: string;
    deaths: string;
    deltaconfirmed: string;
    deltadeaths: string;
    deltarecovered: string;
    lastupdatedtime: string;
    recovered: string;
    state: string;
    statecode: string;
    statenotes: string;
}


export interface TestReport {
    individualstestedperconfirmedcase: string;
    positivecasesfromsamplesreported: string;
    samplereportedtoday: string;
    source: string;
    testpositivityrate: string;
    testsconductedbyprivatelabs: string;
    testsperconfirmedcase: string;
    totalindividualstested: string;
    totalpositivecases: string;
    totalsamplestested: string;
    updatetimestamp: string;

}

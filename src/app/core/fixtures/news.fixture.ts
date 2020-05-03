import { News } from '../models/news';

export function getNews(): News {
    return {
        id: 1,
        title: 'Title',
        description: 'Description',
        summary: 'Summary',
        fullNews: 'Full News'
    };
}


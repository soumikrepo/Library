using { library.db as db } from '../db/data-model';

@path : '/LibraryService'
service LibraryService {

 entity books as projection on db.Books;


annotate Admin with @odata.draft.enabled ;

}
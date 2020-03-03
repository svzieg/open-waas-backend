import {Document, Schema, model, connect} from 'mongoose' ;

 
connect('mongodb://localhost/test', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

const PageSchema: Schema = new Schema({
  title: {type: String, required: true},
  url: {type: String, required: true}
})



export const PageModel = model('Page', PageSchema);



export interface IPage extends Document {
  title: string;
  content: string;
}

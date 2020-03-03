import {Document, Schema, model, connect} from 'mongoose' ;

 
connect('mongodb://localhost/test', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

const PostSchema: Schema = new Schema({
  title: {type: String, required: true},
  content: {type: String}
})



export const PostModel = model('Post', PostSchema);



export interface IPost extends Document {
  title: string;
  content: string;
}

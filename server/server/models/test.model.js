import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

let TestModel = mongoose.model('Test', TestSchema);

TestModel.addTest = (testToAdd) => {
  return testToAdd.save();
}

export default TestModel
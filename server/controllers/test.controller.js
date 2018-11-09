import Test from '../models/test.model'

const controller = {}

controller.addTest = async (req, res) => {
    console.log(req.body.title)
    
    let newTest = Test({
        title: req.body.title
    })

    try {
        const savedTest = await Test.addTest(newTest)
        res.send('added: ' + savedTest)
    }
    catch(err) {
        res.send('error trying to add test')
    }

}

export default controller
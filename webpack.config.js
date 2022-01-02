module.exports={
    
    entry:'./src/main.js',
    output:'./dist',

    module:{
        rules:[
            {
                test:/\.m?js$/,
                use:'bable-loader' 
            }
        ]
    }



}
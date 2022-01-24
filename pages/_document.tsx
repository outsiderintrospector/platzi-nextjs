import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//       //cualquier cambio aqui aplica para todas las paginas 
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html>
       <Head>
           {/* favicon */}
           {/* webfonts con un link  */}
           {/* styleSheet */}
           {/* scripts/JS */}
       </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

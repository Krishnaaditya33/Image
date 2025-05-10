import ReactCompareImage from 'react-compare-image'

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Before & After MailMind</h1>
      <ReactCompareImage
        leftImage="/before.png"
        rightImage="/after.png"
        leftImageLabel="Before MailMind"
        rightImageLabel="After MailMind"
        sliderLineColor="#00C2FF"
      />
    </div>
  )
}

export default App

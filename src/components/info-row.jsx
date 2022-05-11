import HighlightedText from "./highlighted-text";


const InfoRow = ({ filteredBy, searchField, text, content }) => (
  <div className='row border-bottom'>
    <div className='col-4 text-start fw-bold'>{text}</div>
    <div className='col'>
      {filteredBy === text ? <HighlightedText text={content} toHighlight={searchField}/> : content}
    </div>
  </div>
);

export default InfoRow;
import HighlightedText from "./highlighted-text";


const InfoRow = ({ filteredBy, searchField, text, content }) => (
  <div className='row border-bottom'>
    <div className='col-4 text-start fw-bold text-muted'>{text[0].toUpperCase() + text.slice(1)}</div>
    <div className='col text-end'>
      {filteredBy === text ? <HighlightedText text={content} toHighlight={searchField}/> : content}
    </div>
  </div>
);

export default InfoRow;
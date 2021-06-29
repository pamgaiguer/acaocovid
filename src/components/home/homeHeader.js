import React from 'react'
import SEO from '../SEO'

export const HomeHeader = ({ homeHeader }) => {
  const imgHeader = (homeHeader) => {
    const imgSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'full_width_image'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.image.url
      return mainImg
    }
  }
  const headerSectionTextInfo = (homeHeader) => {
    const textSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text
      return sectionTitle
    }
  }

  const headerTitle = (homeHeader) => {
    const textSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.raw
      return sectionTitle
    }
  }

  const headerLeftText = (homeHeader) => {
    const textSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const leftColumn = textSlice.primary.left_column_text.text
      return leftColumn
    }
  }
  return (
    <div className="intro">
      <SEO
        post={{
          image: imgHeader(homeHeader) || false,
          url: '/',
          description: headerLeftText(homeHeader)
        }}
      />
      <div className="call">
        <h1>{headerSectionTextInfo(homeHeader)}</h1>
        <h2>Atualização do estudo entre o período de 19/04 a 19/05/21</h2>
        <p>{headerLeftText(homeHeader)}</p>
        <a href="/publicacoes/atualizacao-a-vacina-conteria-a-pandemia-no-brasil">
          Saiba mais
        </a>
      </div>
      <div
        className="intro-img"
        style={{ backgroundImage: 'url(' + imgHeader(homeHeader) + ')' }}
      />
    </div>
  )
}

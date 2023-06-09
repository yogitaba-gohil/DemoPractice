import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filters from '../components/Filters/Filters'
import PageHero from '../components/PageHero'
import ProductList from '../components/ProductList'
import { useFilterContext } from '../context/filter_context'

const ProductsPage = () => {
  const { clearFilters } = useFilterContext()

  useEffect(() => {
    // when component mounts clear the filter
    clearFilters()
  }, [])
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage

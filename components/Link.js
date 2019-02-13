import styled from 'styled-components'

export default styled.a.attrs({
  target: p => p.external && '_blank',
})`
  color: ${p => p.theme.colors.link};
  text-decoration: none;
  font-size: ${p => `${p.size || 2}rem`};

  &:hover,
  &:active,
  &:visited,
  &:link {
    color: ${p => p.theme.colors.link};
    text-decoration: none;
  }
`

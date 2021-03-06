export default `
  <Wrapper icon="🤡" title="Assert messages">
    <Panel>
      <Character 
        type="computer-woman" 
        say="Dear colleagues, please don't use assert.ok(true) in tests. It's hard to find which test is failing if there are no assert messages."
        bubbleSizing="double"
        emotion="✉️"
      />
      <Character 
        type="computer-man"
      />
    </Panel>
    <Panel title="Next day">
      <Character 
        type="computer-woman" 
        say="t(ಠ益ಠt)"
      />
      <Character 
        type="computer-man" 
        say="What's wrong?"
      />
    </Panel>
    <Panel>
      <Character 
        type="computer-woman" 
        bubbleSizing="double"
        say="Well now the code is full of assert.ok(true, 'testing')"
      />
      <Character 
        type="computer-man"
        emotion="😋"
      />
    </Panel>
  </Wrapper>
`;

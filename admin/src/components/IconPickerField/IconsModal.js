// @ts-nocheck
import React,  { useState, useEffect ,SVGSVGElement, } from 'react';
import { renderToString, renderToStaticMarkup} from 'react-dom/server';
import SVGWrapper from "react-svg-wrapper";

import {
  Button,
  SearchForm,
  Searchbar,
  Typography,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@strapi/design-system';

import * as tablerIcons from '../../../../node_modules/@tabler/icons/dist/esm/tabler-icons.js';

import styled from 'styled-components';

const IconWraper = styled.button`
  margin: ${({ theme }) => theme.spaces[2]};
  color: ${({ theme }) => theme.colors.neutral900};
  display: inline-block;
`;

const IconsModal = ({ closeModal, setSelectedIcon, name, onChange, searchbarRef }) => {
  const [selectedIconLibrary, setSelectedIconLibrary] = useState('icons');
  const [query, setQuery] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);
  const iconsLib = {
    icons: tablerIcons
  };
  
  const ParseIconNameToDashCase = function (camel) {
    return camel.replace(/(^Icon)/gi, "").replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
  }

  // search logic
  useEffect(() => {
    const icons = Object.entries(iconsLib[selectedIconLibrary]).map(icon => {
      let iconname = ParseIconNameToDashCase(icon[0])
      return [iconname, icon[1]]
    })
    if (!query) return setFilteredIcons(icons);

    const filtered = icons.filter(([iconName]) =>
      iconName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIcons(filtered);
  }, [query, selectedIconLibrary]);

  return (
    <ModalLayout onClose={closeModal} labelledBy="title">
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Select an icon
        </Typography>
      </ModalHeader>
      <ModalBody>
        <SearchForm style={{ marginBottom: '1rem' }}>
          <Searchbar
            name="searchbar"
            onClear={() => setQuery('')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            clearLabel="Clearing the search"
            placeholder="Search by icon name"
            ref={searchbarRef}
          >
            Searching for an icon
          </Searchbar>
        </SearchForm>

        {filteredIcons.map(([iconName, Icon]) => (
          <IconWraper
            key={iconName}
            onClick={() => {
              setSelectedIcon({
                name: iconName,
                component: Icon()              
              });
              onChange({
                target: {
                  name,
                  type: 'string',
                  value: JSON.stringify({
                    name: iconName,
                    component: Icon()
                  })
                },
              });
              closeModal();
            }}
          > 
          <SVGWrapper
            src={Icon()}
            type="string"
          />
          </IconWraper>
        ))}
      </ModalBody>
      <ModalFooter
        endActions={
          <>
            {/* <Button variant="secondary">Add new stuff</Button> */}
            <Button onClick={closeModal}>Finish</Button>
          </>
        }
      />
    </ModalLayout>
  );
};

export default IconsModal;

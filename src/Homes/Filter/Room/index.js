import React from 'react';
import styled from 'styled-components';
import Dropdown from './../Dropdown';
import entire from './entire.svg';
import privat from './privat.svg';
import shared from './shared.svg';
import Checkbox from './../../../UI/Checkbox';

const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
  &:nth-child(2) {
    padding: 0 16px;
  }
`;
const TextContainer = styled.label`
  display: flex;
`;
const Label = styled.p`
  margin: 3px 0;
  font-size: 1rem;
  color: #383838;
  font-family: 'CircularLight';
`;
const SubLabel = styled.p`
  margin: 0;
  font-family: 'CircularLight';
  font-size: 0.85rem;
  color: #383838;
  max-width: 195px;
`;

const Icon = styled.img``;

const formatRoomLabel = (entireType, privatType, sharedType) => {
  const allTypes = [entireType, privatType, sharedType];
  const trueValue = allTypes.filter(type => type === true);

  if (trueValue.length > 1) return `Room type · ${trueValue.length}`;
  if (entireType) return 'Entire home';
  if (privatType) return 'Private room';
  if (sharedType) return 'Shared room';
  return 'Room type';
};

export default class Dates extends React.Component {
  state = {
    roomType: {
      entire: false,
      privat: false,
      shared: false,
      isOpen: false,
    },
    isApply: false,
  };

  onChange = (field) => {
    if (this.state.roomType[field]) {
      this.setState({
        roomType: { ...this.state.roomType, [field]: false },
      });
    } else {
      this.setState({
        roomType: { ...this.state.roomType, [field]: true },
      });
    }
  };

  openModal = () => {
    this.setState(prevState => ({
      roomType: { ...this.state.roomType, isOpen: !prevState.isOpen },
    }));
  };

  handleClickOutside = () => {
    this.openModal();
    this.resetRooms();
  };

  resetRooms = () => {
    this.setState({
      roomType: {
        entire: false,
        privat: false,
        shared: false,
        isOpen: false,
      },
      isApply: false,
    });
  };

  saveRoom = () => {
    this.setState({ roomType: { ...this.state.roomType, isOpen: false } }, () => {
      this.props.save('price', this.state.roomType);
    });

    this.setState(prevState => ({ isApply: !prevState.isApply }));
  };

  render() {
    return (
      <Dropdown
        btnLabel={formatRoomLabel(
          this.state.roomType.entire,
          this.state.roomType.privat,
          this.state.roomType.shared,
        )}
        mobileTitle="Room types"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveRoom}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.roomType.isOpen}
        isDisplayBtn="none"
        widthModal="330px"
        widthTabletModal="330px"
      >
        <RoomContainer>
          <TextContainer for="entire">
            <Checkbox
              id="entire"
              name="entire"
              checked={this.state.roomType.entire}
              onChange={() => this.onChange('entire')}
            />
            <div>
              <Label>Entire home</Label>
              <SubLabel>Have a place to yourself</SubLabel>
            </div>
          </TextContainer>
          <Icon src={entire} />
        </RoomContainer>

        <RoomContainer>
          <TextContainer for="privat">
            <Checkbox
              id="privat"
              name="privat"
              checked={this.state.roomType.privat}
              onChange={() => this.onChange('privat')}
            />
            <div>
              <Label>Private room</Label>
              <SubLabel>Have your own room and share some common spaces</SubLabel>
            </div>
          </TextContainer>
          <Icon src={privat} />
        </RoomContainer>

        <RoomContainer>
          <TextContainer for="shared">
            <Checkbox
              id="shared"
              name="shared"
              checked={this.state.roomType.shared}
              onChange={() => this.onChange('shared')}
            />
            <div>
              <Label>Shared room</Label>
              <SubLabel>Stay in a shared space, like a common room</SubLabel>
            </div>
          </TextContainer>
          <Icon src={shared} />
        </RoomContainer>
      </Dropdown>
    );
  }
}

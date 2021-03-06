import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
        styleSheet={{
            position: 'relative',
        }}
    >
      {/* O botão que mostra/esconde a div dos stickers */}
      <Button
        buttonColors={{
            contrastColor: appConfig.theme.colors.neutrals["000"],
            mainColor: appConfig.theme.colors.primary[700],
            mainColorLight: appConfig.theme.colors.primary[200],
            mainColorStrong: appConfig.theme.colors.primary[800],
        }} 
        styleSheet={{
            borderRadius: '50%',            
            minWidth: '50px',
            minHeight: '50px',
            fontSize: '20px',
            marginBottom: '8px',
            lineHeight: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'            
        }}
        
        iconName="FaRobot"   
        onClick={() => setOpenState(!isOpen)}
      />
      {/* A div dos stickers */}
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '30px',
            bottom: '30px',
            padding: '16px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: appConfig.theme.colors.neutrals["000"],
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          {/* A lista de stickers */}
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflowX: 'hidden',
              overflowY: 'scroll',
            }}
          >
            {/* Cada sticker. Percorre a lista de stickers no config.json e já mostra cada um. */}
            {appConfig.stickers.map((sticker) => (
              <Text
                onClick={() => {                  
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                tag="li" key={sticker}
                styleSheet={{
                  width: '50%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[600],
                  }
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}
import styled from 'styled-components'

export const CardWrapper = styled.div`
  @font-face {
    font-family: 'gotham-thin';
    src: url(./fonts/Gotham-Thin.otf);
  }

  @font-face {
    font-family: 'gotham-light';
    src: url(./fonts/Gotham-Light.otf);
  }

  @font-face {
    font-family: 'gotham-bold';
    src: url(./fonts/GothamBold.ttf);
  }

  @font-face {
    font-family: 'gotham-bold2';
    src: url(./fonts/Gotham-Bold.otf);
  }
  .podcast{
                margin: 24px 12px 0 20px;
                display: flex;
                flex-direction: column;
                // justify-content: flex-end;
                position: relative;
                width: 30%;
                // height: fit-content;
                border-radius: 6px;
                transition: 0.6s;
                -webkit-box-shadow: 0px 0px 45px -22px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 45px -22px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 45px -22px rgba(0,0,0,0.75);
                background-color: white;

                a{
                    text-decoration: none;
                    &:hover{
                        color: inherit;
                    }
                }
                .podcast-icon{
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 16px;
                    .play-icon{
                        max-width: 100%;
                        overflow: hidden;
                        border-radius: 6px;
                        transition: 0.6s;


                        -webkit-box-shadow: 0px 0px 30px -8px rgba(0,0,0,0.65);
                        -moz-box-shadow: 0px 0px 30px -8px rgba(0,0,0,0.65);
                        box-shadow: 0px 0px 30px -8px rgba(0,0,0,0.65);
                        color: $verde-claro;
                        border: 2px solid $verde-claro;
                        border-radius: 50%;
                        &:hover{
                            -webkit-box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.99);
                            -moz-box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.99);
                            box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.99);
                            cursor: pointer;
                        }

                    }
                }
                .podcast-image-container{
                    padding: 0 30px;
                    left: -55px;
                    top: -25px;
                    position: relative;
                    .podcast-image{
                        max-width: 100%;
                        height: auto;
                        overflow: hidden;
                        border-radius: 6px;
                        transition: 0.6s;


                        -webkit-box-shadow: 0px 0px 30px -8px rgba(0,0,0,0.55);
                        -moz-box-shadow: 0px 0px 30px -8px rgba(0,0,0,0.55);
                        box-shadow: 0px 0px 30px -8px rgba(0,0,0,0.55);
                        // &:hover{
                        //     -webkit-box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.99);
                        //     -moz-box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.99);
                        //     box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.99);
                        // }
                    }
                }


                .podcast-info{
                    padding: 12px 18px;
                    // color: $verde-claro;

                    .podcast-chapeu{
                        font-size: 12px;
                        color: $dark-grey;
                        font-family: "gotham-light";

                    }
                    .podcast-titulo{
                        font-family: "gotham-bold";
                        font-size: 1.3rem;
                        font-weight: 500;
                        line-height: 1.15;
                        margin: 0 ;
                        margin-bottom: 12px;
                    }
                    .podcast-corpo{
                        font-family: "gotham-light";
                        font-size: 0.95rem;
                        line-height: 1.2;
                        margin: 0 0 24px 0;
                    }
                    .podcast-bigode{
                        font-size: 14px;
                        font-family: "gotham-bold2";
                        .podcast-botao{
                            color: $verde-claro;
                            text-decoration: none;
                            cursor: pointer;

                        }

                    }
                }
            }
        }
`

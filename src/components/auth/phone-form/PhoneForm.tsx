import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

import { GeoApiService } from '../../../services/GeoApiService';

import { LogoIcon } from '../../common/icons/LogoIcon';
import { Label } from '../../forms/label/Label';
import { Button } from '../../common/button/Button';
import { Select } from '../../forms/select/Select';
import { MaskedInput } from '../../forms/masked-input/MaskedInput';

import { COUNTRY_PHONE } from '../../../constants/CountryPhone';

import './phone-form.scss';

interface PhoneFormProps {
  onSubmit: (message: any) => void;
}

interface PhoneFormState {
  mask?: string;
}

const countryOptions = COUNTRY_PHONE.map((country: any) => {
  return {
    label: country.name,
    value: country.mask,
    code: country.isoCode,
  };
});

export class PhoneForm extends PureComponent<PhoneFormProps, PhoneFormState> {
  state: PhoneFormState = {};
  
  async componentDidMount () {
    const countryCode = await GeoApiService.getCountryCode();
    
    const defaultCountryOption = countryOptions.find((option) => {
      return option.code === countryCode.toLowerCase();
    }) || countryOptions[0];
    
    this.setState({
      mask: defaultCountryOption.value,
    });
  }
  
  onSubmit = (values: any) => {
    this.props.onSubmit({
      '@type': 'setAuthenticationPhoneNumber',
      phone_number: values.phone,
    });
  };
  
  render () {
    return (
      <Form onSubmit={ this.onSubmit }
            mutators={ {
              resetPhone: (args, state, { changeValue }) => changeValue(state, 'phone', () => undefined),
            } }
            initialValues={ {
              mask: this.state.mask,
            } }>
        { ({ handleSubmit, values, form }) => {
          return (
            <form onSubmit={ handleSubmit } className='rt-phone-form'>
              <div className='rt-phone-form__header'>
                <LogoIcon className='rt-phone-form__logo'/>
                
                <div className='rt-phone-form__title'>
                  <FormattedMessage id={ 'components.phone-form.title' }
                                    defaultMessage={ 'Telegram' }/>
                </div>
                
                <div className='rt-phone-form__subtitle'>
                  <FormattedMessage id={ 'components.phone-form.subtitle' }
                                    defaultMessage={ 'Welcome to the web application' }/>
                </div>
              </div>
              
              <div className='rt-phone-form__body'>
                <Label className='rt-phone-form__label'
                       title={ <FormattedMessage id={ 'components.phone-form.country' }
                                                 defaultMessage={ 'Country' }/> }>
                  <Select name={ 'mask' }
                          isSearchable={ true }
                          onChange={ form.mutators.resetPhone }
                          options={ countryOptions }/>
                </Label>
  
                <Label className='rt-phone-form__label'
                       title={ <FormattedMessage id={ 'components.phone-form.phone-number' }
                                                 defaultMessage={ 'Your phone' }/> }>
                  <MaskedInput name={ 'phone' }
                               mask={ values.mask }/>
                </Label>
  
                <Button className='rt-phone-form__submit rt-button--primary'>
                  <FormattedMessage id={ 'components.phone-form.submit' }
                                    defaultMessage={ 'Next' }/>
                </Button>
              </div>
            </form>
          );
        } }
      </Form>
    );
  }
}
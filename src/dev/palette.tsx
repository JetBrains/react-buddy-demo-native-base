import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {
  Box,
  Center,
  Circle,
  Square,
  Container,
  Flex,
  Spacer,
  HStack,
  Row,
  Stack,
  VStack,
  Column,
  ZStack,
  Button,
  Icon,
  Pressable,
  Checkbox,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  Radio,
  Select,
  Slider,
  Switch,
  TextArea,
  Badge,
  Divider,
  Alert,
  Progress,
  Skeleton,
  Spinner,
  Text,
  Heading,
  AlertDialog,
  Menu,
  HamburgerIcon,
  Modal,
  Popover,
  Tooltip,
  Actionsheet,
  Avatar,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  WarningTwoIcon,
  WarningIcon,
  CheckIcon,
  ChevronLeftIcon,
  MoonIcon,
  SearchIcon,
  MinusIcon,
  QuestionOutlineIcon,
  InfoIcon,
  SunIcon,
  CloseIcon,
  QuestionIcon,
  ArrowUpIcon,
  InfoOutlineIcon,
  CircleIcon,
  Image,
  PresenceTransition,
  Slide,
  Stagger,
  Fab,
  Hidden
} from "native-base";
export const PaletteTree = () => (
  <Palette>
    <Category name='Layout'>
      <Component name="Box">
        <Variant>
          <Box bg="primary.400">
            Box content
          </Box>
        </Variant>
      </Component>
      <Component name="Center">
        <Variant>
          <Center w="150px" h="70px" bg="primary.400">
            Center Content
          </Center>
        </Variant>
      </Component>
      <Component name="Circle">
        <Variant>
          <Circle size="100px" bg="secondary.400">
            Circle
          </Circle>
        </Variant>
      </Component>
      <Component name="Square">
        <Variant>
          <Square size="100px" bg="secondary.400">
            Square
          </Square>
        </Variant>
      </Component>
      <Component name="Container">
        <Variant>
          <Container>
            Container content
          </Container>
        </Variant>
      </Component>
      <Component name="Flex">
        <Variant name="Row">
          <Flex
              h="100px"
              w="100px"
              bg="coolGray.800"
              direction="row"
          >
            <Box bg="primary.400">
              Flex
            </Box>
            <Box bg="primary.400">
              content
            </Box>
          </Flex>
        </Variant>
        <Variant name="Column">
          <Flex
              h="100px"
              w="100px"
              bg="coolGray.800"
              direction="column"
          >
            <Box bg="primary.400">
              Flex
            </Box>
            <Box bg="primary.400">
              content
            </Box>
          </Flex>
        </Variant>
        <Variant name="Row reverse">
          <Flex
              h="100px"
              w="100px"
              bg="coolGray.800"
              direction="row-reverse"
          >
            <Box bg="primary.400">
              Flex
            </Box>
            <Box bg="primary.400">
              content
            </Box>
          </Flex>
        </Variant>
        <Variant name="Column reverse">
          <Flex
              h="100px"
              w="100px"
              bg="coolGray.800"
              direction="column-reverse"
          >
            <Box bg="primary.400">
              Flex
            </Box>
            <Box bg="primary.400">
              content
            </Box>
          </Flex>
        </Variant>
      </Component>
      <Component name="Spacer">
        <Variant>
          <Spacer/>
        </Variant>
      </Component>
      <Component name="HStack/Row">
        <Variant name="HStack">
          <HStack>
            HStack content
          </HStack>
        </Variant>
        <Variant name="Row">
          <Row>
            Row Content
          </Row>
        </Variant>
      </Component>
      <Component name="Stack">
        <Variant>
          <Stack>
            Stack content
          </Stack>
        </Variant>
      </Component>
      <Component name="VStack/Column">
        <Variant name="VStack">
          <VStack>
            VStack content
          </VStack>
        </Variant>
        <Variant name="Column">
          <Column>
            Column content
          </Column>
        </Variant>
      </Component>
      <Component name="ZStack">
        <Variant>
          <ZStack>
            <Box>
              ZStack content
            </Box>
          </ZStack>
        </Variant>
      </Component>
    </Category>
    <Category name="Forms">
      <Component name="Button">
        <Variant name="xs">
          <Button size="xs">
            Button
          </Button>
        </Variant>
        <Variant name="sm">
          <Button size="sm">
            Button
          </Button>
        </Variant>
        <Variant name="md">
          <Button>
            Button
          </Button>
        </Variant>
        <Variant name="lg">
          <Button size="lg">
            Button
          </Button>
        </Variant>
        <Variant name="Secondary">
          <Button colorScheme="secondary">
            Button
          </Button>
        </Variant>
        <Variant name="Disabled">
          <Button isDisabled={true}>
            Button
          </Button>
        </Variant>
        <Variant name="Subtle">
          <Button variant="subtle">
            Button
          </Button>
        </Variant>
        <Variant name="Outline">
          <Button variant="outline">
            Button
          </Button>
        </Variant>
        <Variant name="Link">
          <Button variant="link">
            Button
          </Button>
        </Variant>
        <Variant name="Ghost">
          <Button variant="ghost">
            Button
          </Button>
        </Variant>
        <Variant name="Unstyled">
          <Button variant="unstyled">
            Button
          </Button>
        </Variant>
        <Variant name="Loading">
          <Button isLoading={true}>
            Button
          </Button>
        </Variant>
        <Variant name="Left icon">
          <Button leftIcon={<Icon size="sm"/>}>
            Button
          </Button>
        </Variant>
        <Variant name="Right icon">
          <Button rightIcon={<Icon size="sm"/>}>
            Button
          </Button>
        </Variant>
      </Component>
      <Component name="ButtonGroup">
        <Variant>
          <Button.Group isAttached={true}>
            <Button>
              Button 1
            </Button>
            <Button>
              Button 2
            </Button>
          </Button.Group>
        </Variant>
      </Component>
      <Component name="Pressable">
        <Variant>
          <Pressable>
            Pressable
          </Pressable>
        </Variant>
      </Component>
      <Component name="Checkbox">
        <Variant name="size sm">
          <Checkbox
            value=""
            size="sm"
          >
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="size md">
          <Checkbox
              value=""
              size="md"
          >
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="size lg">
          <Checkbox
              value=""
              size="lg"
          >
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="color">
          <Checkbox
              value=""
              colorScheme="orange"
          >
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="icon">
          <Checkbox
              value=""
              size="md"
              icon={<Icon />}
          >
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="disabled">
          <Checkbox
            value=""
            isDisabled={true}
          >
            Checkbox
          </Checkbox>
        </Variant>
        <Variant name="invalid">
          <Checkbox
              value=""
              isInvalid={true}
          >
            Checkbox
          </Checkbox>
        </Variant>
      </Component>
      <Component name="CheckboxGroup">
        <Variant>
          <Checkbox.Group>
            <Checkbox value="value1">
              checkbox
            </Checkbox>
            <Checkbox value="value2">
              checkbox
            </Checkbox>
          </Checkbox.Group>
        </Variant>
      </Component>
      <Component name="FormControl">
        <Variant>
          <FormControl>
            FormControl inner
          </FormControl>
        </Variant>
        <Variant name="required">
          <FormControl isRequired={true}>
            FormControl inner
          </FormControl>
        </Variant>
        <Variant name="disabled">
          <FormControl isDisabled={true}>
            FormControl inner
          </FormControl>
        </Variant>
        <Variant name="invalid">
          <FormControl isInvalid={true}>
            FormControl inner
          </FormControl>
        </Variant>
        <Variant name="Label">
          <FormControl>
            <FormControl.Label>
              FormControl label
            </FormControl.Label>
          </FormControl>
        </Variant>
        <Variant name="HelperText">
          <FormControl>
            <FormControl.HelperText>
              FormControl helper text
            </FormControl.HelperText>
          </FormControl>
        </Variant>
        <Variant name="ErrorMessage">
          <FormControl isInvalid={true}>
            <FormControl.ErrorMessage>
              FormControl Error message
            </FormControl.ErrorMessage>
          </FormControl>
        </Variant>
      </Component>
      <Component name="IconButton">
        <Variant name="size sm">
          <IconButton size="sm"/>
        </Variant>
        <Variant name="size md">
          <IconButton size="md"/>
        </Variant>
        <Variant name="size lg">
          <IconButton size="lg"/>
        </Variant>
        <Variant name="outline">
          <IconButton variant="outline"/>
        </Variant>
        <Variant name="solid">
          <IconButton variant="solid"/>
        </Variant>
        <Variant name="ghost">
          <IconButton variant="ghost"/>
        </Variant>
      </Component>
      <Component name="input">
        <Variant name="size xs">
          <Input size="xs"/>
        </Variant>
        <Variant name="size sm">
          <Input size="sm"/>
        </Variant>
        <Variant name="size md">
          <Input size="md"/>
        </Variant>
        <Variant name="size lg">
          <Input size="lg"/>
        </Variant>
        <Variant name="size xl">
          <Input size="xl"/>
        </Variant>
        <Variant name="size 2xl">
          <Input size="2xl"/>
        </Variant>
        <Variant name="outline">
          <Input variant="outline"/>
        </Variant>
        <Variant name="filled">
          <Input variant="filled"/>
        </Variant>
        <Variant name="underlined">
          <Input variant="underlined"/>
        </Variant>
        <Variant name="unstyled">
          <Input variant="unstyled"/>
        </Variant>
        <Variant name="rounded">
          <Input variant="rounded"/>
        </Variant>
        <Variant name="password">
          <Input type="password"/>
        </Variant>
        <Variant name="InputGroup">
          <InputGroup>
            <Input placeholder="input1"/>
            <Input placeholder="input2"/>
          </InputGroup>
        </Variant>
        <Variant name="InputLeftAddon">
          <InputGroup>
            <InputLeftAddon>
              left addon
            </InputLeftAddon>
            <Input/>
          </InputGroup>
        </Variant>
        <Variant name="InputRightAddon">
          <InputGroup>
            <Input/>
            <InputRightAddon>
              right addon
            </InputRightAddon>
          </InputGroup>
        </Variant>
        <Variant name="InputLeftElement">
            <Input InputLeftElement={<Icon />}/>
        </Variant>
        <Variant name="InputRightElement">
          <Input InputRightElement={<Icon />}/>
        </Variant>
      </Component>
      <Component name="Link">
        <Variant>
          <Link href="">
            Link
          </Link>
        </Variant>
        <Variant name="external">
          <Link
            isExternal={true}
            href=""
          >
            Link
          </Link>
        </Variant>
        <Variant name="no underline">
          <Link
              isUnderlined={false}
              href=""
          >
            Link
          </Link>
        </Variant>
      </Component>
      <Component name="Radio">
        <Variant name="size sm">
          <Radio.Group name="radio">
            <Radio
                size="sm"
                value=""
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
        <Variant name="size md">
          <Radio.Group name="radio">
            <Radio
                size="md"
                value=""
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
        <Variant name="size lg">
          <Radio.Group name="radio">
            <Radio
                size="lg"
                value=""
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
        <Variant name="invalid">
          <Radio.Group name="radio">
            <Radio
                isInvalid={true}
                value=""
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
        <Variant name="disabled">
          <Radio.Group name="radio">
            <Radio
                isDisabled={true}
                value=""
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
        <Variant name="color">
          <Radio.Group name="radio">
            <Radio
                value=""
                colorScheme="emerald"
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
        <Variant name="icon">
          <Radio.Group name="radio">
            <Radio
                value=""
                icon={<Icon/>}
            >
              Radio
            </Radio>
          </Radio.Group>
        </Variant>
      </Component>
      <Component name="Select">
        <Variant>
          <Select>
            <Select.Item
                label="item"
                value="item"
            />
          </Select>
        </Variant>
      </Component>
      <Component name="Slider">
        <Variant name="size sm">
          <Slider size="sm">
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Variant>
        <Variant name="size md">
          <Slider size="md">
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Variant>
        <Variant name="size lg">
          <Slider size="lg">
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Variant>
        <Variant name="color">
          <Slider colorScheme="emerald">
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Variant>
        <Variant name="customized">
          <Slider>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb>
              <Icon/>
            </Slider.Thumb>
          </Slider>
        </Variant>
      </Component>
      <Component name="Switch">
        <Variant name="size sm">
          <Switch size="sm"/>
        </Variant>
        <Variant name="size md">
          <Switch size="md"/>
        </Variant>
        <Variant name="size lg">
          <Switch size="lg"/>
        </Variant>
        <Variant name="color">
          <Switch colorScheme="secondary"/>
        </Variant>
        <Variant name="track color">
          <Switch
              offTrackColor="orange.100"
              onTrackColor="orange.200"
          />
        </Variant>
        <Variant name="thumb color">
          <Switch
              onThumbColor="indigo.500"
              offThumbColor="indigo.50"
          />
        </Variant>
      </Component>
      <Component name="TextArea">
        <Variant>
          <TextArea/>
        </Variant>
        <Variant name="disabled">
          <TextArea isDisabled={true} />
        </Variant>
        <Variant name="invalid">
          <TextArea isInvalid={true}/>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Badge">
        <Variant name="solid">
          <Badge variant="solid">
            Badge
          </Badge>
        </Variant>
        <Variant name="outline">
          <Badge variant="outline">
            Badge
          </Badge>
        </Variant>
        <Variant name="subtle">
          <Badge>
            Badge
          </Badge>
        </Variant>
        <Variant name="color">
          <Badge colorScheme="success">
            Badge
          </Badge>
        </Variant>
      </Component>
      <Component name="Divider">
        <Variant name="horizontal">
          <Divider/>
        </Variant>
        <Variant name="vertical">
          <Divider orientation="vertical"/>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert">
        <Variant name="success">
          <Alert status="success">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="error">
          <Alert status="error">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="info">
          <Alert status="info">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="warning">
          <Alert status="warning">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="solid">
          <Alert variant="solid">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="left-accent">
          <Alert variant="left-accent">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="top-accent">
          <Alert variant="top-accent">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="outline">
          <Alert variant="outline">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="subtle">
          <Alert variant="subtle">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
        <Variant name="outline-light">
          <Alert variant="outline-light">
            <Alert.Icon />
            Alert content
          </Alert>
        </Variant>
      </Component>
      <Component name="Progress">
        <Variant name="size xs">
          <Box w="100%">
            <Progress
                value={50}
                size="xs"
            />
          </Box>
        </Variant>
        <Variant name="size sm">
          <Box w="100%">
            <Progress
                value={50}
                size="sm"
            />
          </Box>
        </Variant>
        <Variant name="size md">
          <Box w="100%">
            <Progress
                value={50}
                size="md"
            />
          </Box>
        </Variant>
        <Variant name="size lg">
          <Box w="100%">
            <Progress
                value={50}
                size="lg"
            />
          </Box>
        </Variant>
        <Variant name="size xl">
          <Box w="100%">
            <Progress
                value={50}
                size="xl"
            />
          </Box>
        </Variant>
        <Variant name="size 2xl">
          <Box w="100%">
            <Progress
                value={50}
                size="2xl"
            />
          </Box>
        </Variant>
        <Variant name="color">
          <Box w="100%">
            <Progress
                value={50}
                colorScheme="secondary"
            />
          </Box>
        </Variant>
      </Component>
      <Component name="Skeleton">
        <Variant>
          <Skeleton/>
        </Variant>
        <Variant name="text">
          <Skeleton.Text/>
        </Variant>
      </Component>
      <Component name="Spinner">
        <Variant name="size sm">
          <Spinner size="sm"/>
        </Variant>
        <Variant name="size lg">
          <Spinner size="lg"/>
        </Variant>
        <Variant name="color">
          <Spinner color="emerald.500"/>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component name="Text">
        <Variant name="size xs">
          <Text fontSize="xs">
            Text
          </Text>
        </Variant>
        <Variant name="size sm">
          <Text fontSize="sm">
            Text
          </Text>
        </Variant>
        <Variant name="size md">
          <Text fontSize="md">
            Text
          </Text>
        </Variant>
        <Variant name="size lg">
          <Text fontSize="lg">
            Text
          </Text>
        </Variant>
        <Variant name="size xl">
          <Text fontSize="xl">
            Text
          </Text>
        </Variant>
        <Variant name="size 2xl">
          <Text fontSize="2xl">
            Text
          </Text>
        </Variant>
        <Variant name="size 3xl">
          <Text fontSize="3xl">
            Text
          </Text>
        </Variant>
        <Variant name="size 4xl">
          <Text fontSize="4xl">
            Text
          </Text>
        </Variant>
        <Variant name="size 5xl">
          <Text fontSize="5xl">
            Text
          </Text>
        </Variant>
        <Variant name="size 6xl">
          <Text fontSize="6xl">
            Text
          </Text>
        </Variant>
        <Variant name="truncated">
          <Text isTruncated={true}>
            Text
          </Text>
        </Variant>
        <Variant name="bold">
          <Text bold={true}>
            Text
          </Text>
        </Variant>
        <Variant name="italic">
          <Text italic={true}>
            Text
          </Text>
        </Variant>
        <Variant name="underline">
          <Text underline={true}>
            Text
          </Text>
        </Variant>
        <Variant name="highlight">
          <Text highlight={true}>
            Text
          </Text>
        </Variant>
        <Variant name="sub">
          <Text sub={true}>
            Text
          </Text>
        </Variant>
        <Variant name="underline">
          <Text underline={true}>
            Text
          </Text>
        </Variant>
        <Variant name="strike through">
          <Text strikeThrough={true}>
            Text
          </Text>
        </Variant>
      </Component>
      <Component name="Heading">
        <Variant name="size xs">
          <Heading size="xs">
            Heading
          </Heading>
        </Variant>
        <Variant name="size sm">
          <Heading size="sm">
            Heading
          </Heading>
        </Variant>
        <Variant name="size md">
          <Heading size="md">
            Heading
          </Heading>
        </Variant>
        <Variant name="truncated">
          <Heading isTruncated={true}>
            NativeBase is a simple, modular and accessible component library that
            gives you building blocks to build you React applications.
          </Heading>
        </Variant>
      </Component>
    </Category>
    <Category name="Overlay">
      <Component name="AlertDialog">
        <Variant>
          <AlertDialog leastDestructiveRef={{current: {}}} isOpen={true}>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Alert header</AlertDialog.Header>
              <AlertDialog.Body>
                Alert body
              </AlertDialog.Body>
              <AlertDialog.Footer>
                Alert footer
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </Variant>
      </Component>
      <Component name="Menu">
        <Variant>
          <Menu trigger={triggerProps => {
            return <Pressable {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
          }}>
            <Menu.Group title="Menu Group">
              <Menu.Item>
                Menu item
              </Menu.Item>
            </Menu.Group>
          </Menu>
        </Variant>
        <Variant name="OptionsGroup radio">
          <Menu trigger={triggerProps => {
            return <Pressable {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
          }}>
            <Menu.OptionGroup type="radio" title="Menu Group">
              <Menu.ItemOption value="item1">
                Menu item 1
              </Menu.ItemOption>
              <Menu.ItemOption value="item2">
                Menu item 2
              </Menu.ItemOption>
            </Menu.OptionGroup>
          </Menu>
        </Variant>
        <Variant name="OptionsGroup checkbox">
          <Menu trigger={triggerProps => {
            return <Pressable {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
          }}>
            <Menu.OptionGroup type="checkbox" title="Menu Group">
              <Menu.ItemOption value="item1">
                Menu item 1
              </Menu.ItemOption>
              <Menu.ItemOption value="item2">
                Menu item 2
              </Menu.ItemOption>
            </Menu.OptionGroup>
          </Menu>
        </Variant>
      </Component>
      <Component name="Modal">
        <Variant name="size xs">
          <Modal isOpen={true} size="xs">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
                Body
              </Modal.Body>
              <Modal.Footer>
                Footer
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Variant>
        <Variant name="size sm">
          <Modal isOpen={true} size="sm">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
                Body
              </Modal.Body>
              <Modal.Footer>
                Footer
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Variant>
        <Variant name="size md">
          <Modal isOpen={true} size="md">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
                Body
              </Modal.Body>
              <Modal.Footer>
                Footer
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Variant>
        <Variant name="size lg">
          <Modal isOpen={true} size="lg">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
                Body
              </Modal.Body>
              <Modal.Footer>
                Footer
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Variant>
        <Variant name="size xl">
          <Modal isOpen={true} size="xl">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
                Body
              </Modal.Body>
              <Modal.Footer>
                Footer
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Variant>
        <Variant name="size full">
          <Modal isOpen={true} size="full">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
                Body
              </Modal.Body>
              <Modal.Footer>
                Footer
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Variant>
      </Component>
      <Component name="Popover">
        <Variant>
          <Popover trigger={triggerProps => {
            return <Button {...triggerProps}>
              Popover trigger
            </Button>;
          }}>
            <Popover.Content w="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              <Popover.Header>Header</Popover.Header>
              <Popover.Body>
                Body
              </Popover.Body>
              <Popover.Footer>
                Footer
              </Popover.Footer>
            </Popover.Content>
          </Popover>
        </Variant>
      </Component>
      <Component name="Tooltip">
        <Variant name="placement top left">
          <Tooltip
              label="tooltip content"
              placement="top left"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement top">
          <Tooltip
              label="tooltip content"
              placement="top"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement top right">
          <Tooltip
              label="tooltip content"
              placement="top right"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement right top">
          <Tooltip
              label="tooltip content"
              placement="right top"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement right">
          <Tooltip
              label="tooltip content"
              placement="right"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement right bottom">
          <Tooltip
              label="tooltip content"
              placement="right bottom"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement bottom left">
          <Tooltip
              label="tooltip content"
              placement="bottom left"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement bottom">
          <Tooltip
              label="tooltip content"
              placement="bottom"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement bottom right">
          <Tooltip
              label="tooltip content"
              placement="bottom right"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement left top">
          <Tooltip
              label="tooltip content"
              placement="left top"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement left">
          <Tooltip
              label="tooltip content"
              placement="left"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="placement left bottom">
          <Tooltip
              label="tooltip content"
              placement="left bottom"
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
        <Variant name="delay">
          <Tooltip
              label="tooltip content"
              openDelay={500}
          >
            <Button>
              Tooltip
            </Button>
          </Tooltip>
        </Variant>
      </Component>
    </Category>
    <Category name="Disclosure">
      <Component name="Actionsheet">
        <Variant>
          <Actionsheet isOpen={true}>
            <Actionsheet.Content>
              Content
              <Actionsheet.Item>Actionsheet item</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Variant>
      </Component>
    </Category>
    <Category name="Media and Icons">
      <Component name="Avatar">
        <Variant name="size xs">
          <Avatar
              size="xs"
              source={{
                uri: ""
              }}
          >
            Avatar
          </Avatar>
        </Variant>
        <Variant name="size sm">
          <Avatar
              size="sm"
              source={{
                uri: ""
              }}
          >
            Avatar
          </Avatar>
        </Variant>
        <Variant name="size md">
          <Avatar
              size="md"
              source={{
                uri: ""
              }}
          >
            Avatar
          </Avatar>
        </Variant>
        <Variant name="size lg">
          <Avatar
              size="lg"
              source={{
                uri: ""
              }}
          >
            Avatar
          </Avatar>
        </Variant>
        <Variant name="size xl">
          <Avatar
              size="xl"
              source={{
                uri: ""
              }}
          >
            Avatar
          </Avatar>
        </Variant>
        <Variant name="size 2xl">
          <Avatar
              size="2xl"
              source={{
                uri: ""
              }}
          >
            Avatar
          </Avatar>
        </Variant>
        <Variant name="Badge">
          <Avatar
              source={{
                uri: ""
              }}
          >
            Avatar
            <Avatar.Badge bg="green.500" />
          </Avatar>
        </Variant>
        <Variant name="Group">
          <Avatar.Group>
            <Avatar
                source={{
                  uri: ""
                }}
            >
              Avatar1
            </Avatar>
            <Avatar
                source={{
                  uri: ""
                }}
            >
              Avatar2
            </Avatar>
          </Avatar.Group>
        </Variant>
      </Component>
      <Component name="Icon">
        <Variant name="AddIcon">
          <AddIcon/>
        </Variant>
        <Variant name="ArrowBackIcon">
          <ArrowBackIcon/>
        </Variant>
        <Variant name="ArrowForwardIcon">
          <ArrowForwardIcon/>
        </Variant>
        <Variant name="ArrowUpIcon">
          <ArrowUpIcon />
        </Variant>
        <Variant name="ArrowDownIcon">
          <ArrowDownIcon/>
        </Variant>
        <Variant name="CheckIcon">
          <CheckIcon/>
        </Variant>
        <Variant name="CheckCircleIcon">
          <CheckCircleIcon/>
        </Variant>
        <Variant name="ChevronDownIcon">
          <ChevronDownIcon/>
        </Variant>
        <Variant name="ChevronLeftIcon">
          <ChevronLeftIcon/>
        </Variant>
        <Variant name="ChevronRightIcon">
          <ChevronLeftIcon/>
        </Variant>
        <Variant name="ChevronUpIcon">
          <ChevronUpIcon/>
        </Variant>
        <Variant name="CircleIcon">
          <CircleIcon/>
        </Variant>
        <Variant name="CloseIcon">
          <CloseIcon/>
        </Variant>
        <Variant name="HamburgerIcon">
          <HamburgerIcon/>
        </Variant>
        <Variant name="InfoIcon">
          <InfoIcon/>
        </Variant>
        <Variant name="InfoOutlineIcon">
          <InfoOutlineIcon/>
        </Variant>
        <Variant name="MinusIcon">
          <MinusIcon/>
        </Variant>
        <Variant name="MoonIcon">
          <MoonIcon/>
        </Variant>
        <Variant name="QuestionIcon">
          <QuestionIcon/>
        </Variant>
        <Variant name="QuestionOutlineIcon">
          <QuestionOutlineIcon/>
        </Variant>
        <Variant name="SearchIcon">
          <SearchIcon/>
        </Variant>
        <Variant name="SunIcon">
          <SunIcon/>
        </Variant>
        <Variant name="WarningIcon">
          <WarningIcon/>
        </Variant>
        <Variant name="WarningTwoIcon">
          <WarningTwoIcon/>
        </Variant>
      </Component>
      <Component name="Image">
        <Variant name="size xs">
          <Image
              size="xs"
              source={{
                uri: ""
              }}
              alt="image"
          />
        </Variant>
        <Variant name="size sm">
          <Image
              size="sm"
              source={{
                uri: ""
              }}
              alt="image"
          />
        </Variant>
        <Variant name="size md">
          <Image
              size="md"
              source={{
                uri: ""
              }}
              alt="image"
          />
        </Variant>
        <Variant name="size lg">
          <Image
              size="lg"
              source={{
                uri: ""
              }}
              alt="image"
          />
        </Variant>
        <Variant name="size xl">
          <Image
              size="xl"
              source={{
                uri: ""
              }}
              alt="image"
          />
        </Variant>
        <Variant name="size 2xl">
          <Image
              size="2xl"
              source={{
                uri: ""
              }}
              alt="image"
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Transition">
      <Component name="PresenceTransition">
        <Variant>
          <PresenceTransition
              visible={true}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1000
                }
              }}
          >
            Content
          </PresenceTransition>
        </Variant>
      </Component>
      <Component name="Slide">
        <Variant name="placement top">
          <Slide
              in={true}
              placement="top"
          >
            Content
          </Slide>
        </Variant>
        <Variant name="placement bottom">
          <Slide
              in={true}
              placement="bottom"
          >
            Content
          </Slide>
        </Variant>
        <Variant name="placement left">
          <Slide
              in={true}
              placement="left"
          >
            Content
          </Slide>
        </Variant>
        <Variant name="placement right">
          <Slide
              in={true}
              placement="right"
          >
            Content
          </Slide>
        </Variant>
      </Component>
      <Component name="Stagger">
        <Variant>
          <Stagger
              visible={true}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
          >
            Content
          </Stagger>
        </Variant>
      </Component>
    </Category>
    <Category name="Others">
      <Component name="Fab">
        <Variant name="placement top-right">
          <Fab placement="top-right"/>
        </Variant>
        <Variant name="placement top-left">
          <Fab placement="top-left"/>
        </Variant>
        <Variant name="placement bottom-left">
          <Fab placement="bottom-left"/>
        </Variant>
        <Variant name="placement bottom-right">
          <Fab placement="bottom-right"/>
        </Variant>
      </Component>
      <Component name="Hidden">
        <Variant name="platform">
          <Hidden platform="">
            <Box>
              Hidden content
            </Box>
          </Hidden>
        </Variant>
        <Variant name="from">
          <Hidden from="">
            <Box>
              Hidden content
            </Box>
          </Hidden>
        </Variant>
        <Variant name="till">
          <Hidden till="">
            <Box>
              Hidden content
            </Box>
          </Hidden>
        </Variant>
        <Variant name="only">
          <Hidden only="">
            <Box>
              Hidden content
            </Box>
          </Hidden>
        </Variant>
        <Variant name="light">
          <Hidden colorMode="light">
            <Box>
              Hidden content
            </Box>
          </Hidden>
        </Variant>
        <Variant name="dark">
          <Hidden colorMode="dark">
            <Box>
              Hidden content
            </Box>
          </Hidden>
        </Variant>
      </Component>
    </Category>
  </Palette>
);

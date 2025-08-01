import React, { useState } from 'react';
import { sampleTableData, tableColumns, getStatusVariant } from './tableData';
import {
  Provider, defaultTheme, darkTheme,
  // Layout & Structure
  Flex, Grid, View, Header, Footer, Divider,
  // Content & Typography
  Heading, Content, Text, Avatar, Image, Well, IllustratedMessage, Keyboard,
  // Buttons & Actions
  Button, ActionButton, ToggleButton, ButtonGroup, ActionGroup, LogicButton, FileTrigger,
  // Forms & Inputs
  TextField, TextArea, NumberField, SearchField, Checkbox, CheckboxGroup, RadioGroup, Switch, Slider, RangeSlider, Form,
  // Date & Time
  DatePicker, DateField, TimeField, DateRangePicker,
  // Collections & Lists
  ListBox, ListView, TableView, TableHeader, TableBody, Column, Row, Cell, TagGroup, TreeView, TreeViewItem, TreeViewItemContent, Menu, MenuTrigger, ActionMenu, ActionBar, ActionBarContainer,
  // Navigation
  Tabs, TabList, TabPanels, Item, Breadcrumbs, Link, Accordion, Disclosure, DisclosureTitle, DisclosurePanel,
  // Pickers & Dates
  Picker, ComboBox,
  // Colors
  ColorSwatch, ColorPicker, ColorEditor, ColorArea, ColorSlider, ColorWheel, ColorField, ColorSwatchPicker, parseColor,
  // Date & Time (additional)
  Calendar, RangeCalendar,
  // Status & Progress
  Badge, StatusLight, ProgressBar, ProgressCircle, Meter, ToastContainer, ToastQueue, LabeledValue, InlineAlert,
  // Overlays
  DialogTrigger, Dialog, AlertDialog, Tooltip, TooltipTrigger, ContextualHelp,
  // Drag & Drop
  DropZone,
} from '@adobe/react-spectrum';

// Workflow Icons (using basic ones that definitely exist)
import FolderIcon from '@spectrum-icons/workflow/Folder';
import DocumentIcon from '@spectrum-icons/workflow/Document';
import SettingsIcon from '@spectrum-icons/workflow/Settings';
import UserIcon from '@spectrum-icons/workflow/User';
import SearchIcon from '@spectrum-icons/workflow/Search';
import HeartIcon from '@spectrum-icons/workflow/Heart';
import StarIcon from '@spectrum-icons/workflow/Star';
import BellIcon from '@spectrum-icons/workflow/Bell';
import EmailIcon from '@spectrum-icons/workflow/Email';
import HomeIcon from '@spectrum-icons/workflow/Home';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const [demoValues, setDemoValues] = useState({
    text: 'Hello World',
    number: 42,
    date: new Date(),
    slider: 50,
    checkbox: false,
    radio: 'option1',
    switch: false,
    picker: 'red',
    color: '#ff0000',
    colorPicker: parseColor('#ff0000'),
    comboBox: 'apple',
    dateField: null,
    timeField: null,
    dateRange: null,
    colorArea: { red: 255, green: 0, blue: 0 },
    colorSlider: 180,
    selectedKeys: new Set(['item1']),
    tableSelection: new Set(['1']),
    accordionExpanded: new Set(['item1']),
    treeSelection: new Set(['folder1']),
    tags: ['React', 'Spectrum', 'Adobe'],
    colorField: '#ff0000',
    calendarDate: null,
    rangeCalendarDates: null,
    disclosureExpanded: false,
    dialogOpen: false,
    alertDialogOpen: false
  });

  const updateValue = (key, value) => {
    setDemoValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme}>
      <ToastContainer />
      <View backgroundColor="gray-50" minHeight="100vh">
        {/* Header */}
        <Header marginX="size-300" paddingY="size-300">
          <Flex direction="row" justifyContent="space-between" alignItems="center" wrap>
            <Flex direction="row" alignItems="center" gap="size-200">
              <Avatar src="https://2.gravatar.com/avatar/f02aa2e23b19d6dae9f6e570a68cf3fda540eeacccd4b0eeefd8a99d00279f25?size=512&d=initials" alt="React Spectrum" />
              <Heading level={1} margin={0}>🎨 React Spectrum Showcase</Heading>
              <Badge variant="positive">70+ Components</Badge>
            </Flex>
            <Flex direction="row" gap="size-100">
              <StatusLight variant="positive">All Systems Go</StatusLight>
              <Button 
                variant="secondary" 
                onPress={() => {
                  console.log('Current colorScheme:', colorScheme);
                  const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
                  console.log('Switching to:', newColorScheme);
                  setColorScheme(newColorScheme);
                }}
              >
                {colorScheme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
              </Button>
            </Flex>
          </Flex>
        </Header>



        {/* Buttons Section */}
        <View marginTop="size-400" marginX="size-300">
          <Heading level={2} marginBottom="size-300">🔘 Buttons & Actions</Heading>
          <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="size-300" marginBottom="size-600">
            <Well>
              <Heading level={3}>🔘 Basic Buttons</Heading>
              <Flex direction="column" gap="size-200">
                <Button variant="cta" onPress={() => alert('CTA clicked!')}>Call to Action</Button>
                <Button variant="primary" onPress={() => alert('Primary clicked!')}>Primary Button</Button>
                <Button variant="secondary" onPress={() => alert('Secondary clicked!')}>Secondary Button</Button>
                <Button variant="negative" onPress={() => alert('Negative clicked!')}>Negative Button</Button>
                <Button isDisabled>Disabled Button</Button>
                <Button isQuiet>Quiet Button</Button>
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>⚡ Action Buttons</Heading>
              <Flex direction="column" gap="size-200">
                <ActionButton onPress={() => alert('Edit action!')}>
                  ✏️ Edit Document
                </ActionButton>
                <ActionButton onPress={() => alert('Settings opened!')}>
                  ⚙️ Settings
                </ActionButton>
                <ActionButton isQuiet onPress={() => alert('Profile viewed!')}>
                  👤 View Profile
                </ActionButton>
                <ActionButton isDisabled>
                  🔍 Search (Disabled)
                </ActionButton>
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>🔄 Toggle Buttons</Heading>
              <Flex direction="column" gap="size-200">
                <ToggleButton 
                  isSelected={demoValues.checkbox}
                  onChange={(selected) => updateValue('checkbox', selected)}
                >
                  {demoValues.checkbox ? '✅' : '⬜'} Toggle Me
                </ToggleButton>
                <ToggleButton 
                  isSelected={demoValues.switch}
                  onChange={(selected) => updateValue('switch', selected)}
                  isEmphasized
                >
                  {demoValues.switch ? '🔊' : '🔇'} Sound {demoValues.switch ? 'On' : 'Off'}
                </ToggleButton>
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>📁 File Operations</Heading>
              <Flex direction="column" gap="size-200">
                <FileTrigger 
                  acceptedFileTypes={['image/*']} 
                  onSelect={(files) => {
                    const fileNames = Array.from(files).map(f => f.name).join(', ');
                    alert(`Selected images: ${fileNames}`);
                  }}
                >
                  <ActionButton>
                    🖼️ Upload Images
                  </ActionButton>
                </FileTrigger>
                <FileTrigger 
                  acceptedFileTypes={['.pdf', '.doc', '.docx']} 
                  onSelect={(files) => {
                    alert(`Selected documents: ${files[0]?.name}`);
                  }}
                >
                  <Button variant="secondary">📄 Upload Documents</Button>
                </FileTrigger>
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>🧠 Logic Buttons</Heading>
              <Flex direction="column" gap="size-200">
                <LogicButton 
                  variant="and" 
                  onPress={() => alert('AND logic applied!')}
                >
                  AND Condition
                </LogicButton>
                <LogicButton 
                  variant="or" 
                  onPress={() => alert('OR logic applied!')}
                >
                  OR Condition
                </LogicButton>
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>👥 Button Groups</Heading>
              <Flex direction="column" gap="size-300">
                <div>
                  <Text marginBottom="size-100">Connected Buttons:</Text>
                  <ButtonGroup>
                    <Button variant="primary" onPress={() => alert('First!')}>First</Button>
                    <Button variant="primary" onPress={() => alert('Second!')}>Second</Button>
                    <Button variant="primary" onPress={() => alert('Third!')}>Third</Button>
                  </ButtonGroup>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Action Group (Multi-select):</Text>
                  <ActionGroup 
                    selectionMode="multiple"
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys).join(', ');
                      alert(`Selected formatting: ${selected}`);
                    }}
                  >
                    <Item key="bold">📝 Bold</Item>
                    <Item key="italic">🔤 Italic</Item>
                    <Item key="underline">📑 Underline</Item>
                    <Item key="strikethrough">❌ Strike</Item>
                  </ActionGroup>
                </div>

                <div>
                  <Text marginBottom="size-100">Action Group (Single-select):</Text>
                  <ActionGroup 
                    selectionMode="single"
                    defaultSelectedKeys={['left']}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0];
                      alert(`Text alignment: ${selected}`);
                    }}
                  >
                    <Item key="left">⬅️ Left</Item>
                    <Item key="center">↔️ Center</Item>
                    <Item key="right">➡️ Right</Item>
                    <Item key="justify">📐 Justify</Item>
                  </ActionGroup>
                </div>
              </Flex>
            </Well>
          </Grid>
        </View>

        {/* Forms Section */}
        <View marginTop="size-400" marginX="size-300">
          <Heading level={2} marginBottom="size-300">📝 Forms & Inputs</Heading>
          <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="size-300" marginBottom="size-600">
            <Well>
              <Form>
                <Heading level={3}>Text Inputs</Heading>
                <TextField 
                  label="Name" 
                  value={demoValues.text} 
                  onChange={(value) => updateValue('text', value)}
                  description="Enter your full name"
                />
                <TextArea 
                  label="Description" 
                  placeholder="Tell us about yourself..."
                />
                <SearchField 
                  label="Search" 
                  placeholder="Search anything..."
                  onSubmit={(value) => alert(`Searching for: ${value}`)}
                />
                <NumberField 
                  label="Age" 
                  value={demoValues.number} 
                  onChange={(value) => updateValue('number', value)}
                  minValue={0}
                  maxValue={120}
                />
              </Form>
            </Well>

            <Well>
              <Heading level={3}>Selection Controls</Heading>
              <Flex direction="column" gap="size-200">
                <Checkbox 
                  isSelected={demoValues.checkbox} 
                  onChange={(selected) => updateValue('checkbox', selected)}
                >
                  I agree to terms
                </Checkbox>
                <CheckboxGroup label="Interests" value={['music', 'sports']}>
                  <Checkbox value="music">Music</Checkbox>
                  <Checkbox value="sports">Sports</Checkbox>
                  <Checkbox value="reading">Reading</Checkbox>
                </CheckboxGroup>
                <RadioGroup 
                  label="Preferred contact" 
                  value={demoValues.radio} 
                  onChange={(value) => updateValue('radio', value)}
                >
                  <Item key="option1">Email</Item>
                  <Item key="option2">Phone</Item>
                  <Item key="option3">Mail</Item>
                </RadioGroup>
                <Switch 
                  isSelected={demoValues.switch} 
                  onChange={(selected) => updateValue('switch', selected)}
                >
                  Enable notifications
                </Switch>
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>Sliders</Heading>
              <Flex direction="column" gap="size-300">
                <Slider 
                  label="Volume" 
                  value={demoValues.slider} 
                  onChange={(value) => updateValue('slider', value)}
                  minValue={0}
                  maxValue={100}
                />
                <RangeSlider 
                  label="Price Range" 
                  defaultValue={{start: 20, end: 80}}
                  minValue={0}
                  maxValue={100}
                />
              </Flex>
            </Well>
          </Grid>
        </View>

        {/* Status & Progress Section */}
        <View marginTop="size-400" marginX="size-300">
          <Heading level={2} marginBottom="size-300">📊 Status & Progress</Heading>
          <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="size-300" marginBottom="size-600">
            <Well>
              <Heading level={3}>Progress Indicators</Heading>
              <Flex direction="column" gap="size-200">
                <ProgressBar 
                  label="Loading..." 
                  value={demoValues.slider} 
                  maxValue={100}
                />
                <ProgressCircle 
                  aria-label="Loading..." 
                  value={demoValues.slider} 
                  maxValue={100}
                />
                <ProgressCircle 
                  aria-label="Loading..." 
                  isIndeterminate
                />
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>Status & Badges</Heading>
              <Flex direction="column" gap="size-200">
                <Flex direction="row" gap="size-100" wrap>
                  <Badge variant="positive">Success</Badge>
                  <Badge variant="negative">Error</Badge>
                  <Badge variant="notice">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </Flex>
                <Flex direction="row" gap="size-100" wrap>
                  <StatusLight variant="positive">Online</StatusLight>
                  <StatusLight variant="negative">Offline</StatusLight>
                  <StatusLight variant="notice">Away</StatusLight>
                </Flex>
                <Meter 
                  label="Storage used" 
                  value={75} 
                  maxValue={100}
                  variant="positive"
                />
              </Flex>
            </Well>

            <Well>
              <Heading level={3}>Alerts & Labels</Heading>
              <Flex direction="column" gap="size-200">
                <InlineAlert variant="positive">
                  <Heading>Success!</Heading>
                  <Content>Your changes have been saved.</Content>
                </InlineAlert>
                <InlineAlert variant="notice">
                  <Heading>Warning</Heading>
                  <Content>Please review your input.</Content>
                </InlineAlert>
                <LabeledValue label="Status" value="Active" />
                <LabeledValue label="Last Updated" value="2 minutes ago" />
                <div>
                  <Text marginBottom="size-100">Toast Component:</Text>
                  <ButtonGroup>
                    <Button 
                      onPress={() => ToastQueue.neutral('📋 Toast available')}
                      variant="secondary"
                    >
                      Show Neutral Toast
                    </Button>
                    <Button 
                      onPress={() => ToastQueue.positive('✅ Toast is done!')}
                      variant="primary"
                    >
                      Show Positive Toast
                    </Button>
                    <Button 
                      onPress={() => ToastQueue.negative('❌ Toast is burned!')}
                      variant="negative"
                    >
                      Show Negative Toast
                    </Button>
                    <Button 
                      onPress={() => ToastQueue.info('ℹ️ Toasting…')}
                      variant="accent"
                      style="outline"
                    >
                      Show Info Toast
                    </Button>
                  </ButtonGroup>
                </div>
              </Flex>
            </Well>

            {/* Collections - ListView */}
            <Well>
              <Heading level={3}>📊 Collections - ListView</Heading>
              <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="size-300">
                <div>
                  <Text marginBottom="size-100">Enhanced ListView with Selection:</Text>
                  <ListView 
                    aria-label="Enhanced data list"
                    selectionMode="multiple"
                    selectedKeys={demoValues.tableSelection}
                    onSelectionChange={(keys) => updateValue('tableSelection', keys)}
                    maxWidth="100%"
                    height="200px"
                  >
                    <Item key="1" textValue="Adobe Photoshop">
                      <Text>📱 Adobe Photoshop</Text>
                      <Text slot="description">Application • 2024-01-15</Text>
                    </Item>
                    <Item key="2" textValue="React Spectrum">
                      <Text>⚛️ React Spectrum</Text>
                      <Text slot="description">Library • 2024-01-20</Text>
                    </Item>
                    <Item key="3" textValue="Design System">
                      <Text>🎨 Design System</Text>
                      <Text slot="description">Framework • 2024-01-25</Text>
                    </Item>
                    <Item key="4" textValue="Parcel Bundler">
                      <Text>📦 Parcel Bundler</Text>
                      <Text slot="description">Build Tool • 2024-01-30</Text>
                    </Item>
                  </ListView>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Selection Actions:</Text>
                  {demoValues.tableSelection.size > 0 && (
                    <Flex direction="row" gap="size-200" alignItems="center">
                      <Badge variant="info">{demoValues.tableSelection.size} selected</Badge>
                      <MenuTrigger>
                        <ActionButton>📝 Actions</ActionButton>
                        <Menu onAction={(key) => {
                          switch(key) {
                            case 'delete':
                              alert('Delete selected items');
                              break;
                            case 'export':
                              alert('Export selected items');
                              break;
                            case 'clear':
                              updateValue('tableSelection', new Set());
                              break;
                          }
                        }}>
                          <Item key="delete">🗑️ Delete Selected</Item>
                          <Item key="export">📤 Export Selected</Item>
                          <Item key="clear">❌ Clear Selection</Item>
                        </Menu>
                      </MenuTrigger>
                    </Flex>
                  )}
                </div>
              </Grid>
            </Well>

            {/* TableView - Spanning Multiple Grid Columns */}
            <Well UNSAFE_style={{ gridColumn: 'span 2' }}>
              <Heading level={3}>📋 TableView </Heading>
              <Text marginBottom="size-200">TableView component with rich tabular data, spanning multiple grid columns for better visibility:</Text>
              <TableView 
                aria-label="Software inventory table"
                selectionMode="multiple"
                selectedKeys={demoValues.tableSelection}
                onSelectionChange={(keys) => updateValue('tableSelection', keys)}
                width="100%"
                height="400px"
              >
                <TableHeader>
                  <Column allowsSorting>Name</Column>
                  <Column allowsSorting>Type</Column>
                  <Column allowsSorting>Category</Column>
                  <Column>Version</Column>
                  <Column allowsSorting>Size</Column>
                  <Column allowsSorting>Date</Column>
                  <Column allowsSorting>Status</Column>
                </TableHeader>
                <TableBody>
                  {sampleTableData.map((item) => (
                    <Row key={item.id}>
                      <Cell>{item.name}</Cell>
                      <Cell>{item.type}</Cell>
                      <Cell>{item.category}</Cell>
                      <Cell>{item.version}</Cell>
                      <Cell>{item.size}</Cell>
                      <Cell>{item.date}</Cell>
                      <Cell>
                        <Badge variant={getStatusVariant(item.status)}>
                          {item.status}
                        </Badge>
                      </Cell>
                    </Row>
                  ))}
                </TableBody>
              </TableView>
            </Well>

            {/* Additional Collections Components */}
            <Well>
              <Heading level={3}>📦 More Collections</Heading>
              <Flex direction="column" gap="size-300">
                <div>
                  <Text marginBottom="size-100">TagGroup Component:</Text>
                  <TagGroup 
                    label="Technologies"
                    selectionMode="multiple"
                    selectedKeys={new Set(demoValues.tags)}
                    onSelectionChange={(keys) => updateValue('tags', Array.from(keys))}
                  >
                    <Item key="React">React</Item>
                    <Item key="Spectrum">Spectrum</Item>
                    <Item key="Adobe">Adobe</Item>
                    <Item key="TypeScript">TypeScript</Item>
                    <Item key="JavaScript">JavaScript</Item>
                    <Item key="CSS">CSS</Item>
                  </TagGroup>
                </div>
                
                <div>
                  <Text marginBottom="size-100">TreeView with ActionBar:</Text>
                  <ActionBarContainer height="size-3400" maxWidth="size-6000">
                    <TreeView 
                      aria-label="File system"
                      selectionMode="multiple"
                      selectedKeys={demoValues.treeSelection}
                      onSelectionChange={(keys) => updateValue('treeSelection', keys)}
                      defaultExpandedKeys={['documents', 'projects']}
                    >
                      <TreeViewItem id="documents" textValue="Documents">
                        <TreeViewItemContent>
                          <Text>📁 Documents</Text>
                        </TreeViewItemContent>
                        <TreeViewItem id="resume" textValue="Resume.pdf">
                          <TreeViewItemContent>
                            <Text>Resume.pdf</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                        <TreeViewItem id="cover-letter" textValue="Cover Letter.docx">
                          <TreeViewItemContent>
                            <Text>Cover Letter.docx</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                        <TreeViewItem id="portfolio" textValue="Portfolio.pdf">
                          <TreeViewItemContent>
                            <Text>Portfolio.pdf</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                      </TreeViewItem>
                      <TreeViewItem id="projects" textValue="Projects">
                        <TreeViewItemContent>
                          <Text>📁 Projects</Text>
                        </TreeViewItemContent>
                        <TreeViewItem id="react-app" textValue="React App">
                          <TreeViewItemContent>
                            <Text>React App</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                        <TreeViewItem id="design-system" textValue="Design System">
                          <TreeViewItemContent>
                            <Text>Design System</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                        <TreeViewItem id="website" textValue="Personal Website">
                          <TreeViewItemContent>
                            <Text>Personal Website</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                      </TreeViewItem>
                      <TreeViewItem id="media" textValue="Media">
                        <TreeViewItemContent>
                          <Text>📁 Media</Text>
                        </TreeViewItemContent>
                        <TreeViewItem id="photos" textValue="Photos">
                          <TreeViewItemContent>
                            <Text>Photos</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                        <TreeViewItem id="videos" textValue="Videos">
                          <TreeViewItemContent>
                            <Text>Videos</Text>
                          </TreeViewItemContent>
                        </TreeViewItem>
                      </TreeViewItem>
                    </TreeView>
                    {demoValues.treeSelection.size > 0 && (
                      <ActionBar 
                        isEmphasized
                        selectedItemCount={demoValues.treeSelection.size}
                        onAction={(key) => {
                          switch(key) {
                            case 'delete':
                              alert(`Delete ${demoValues.treeSelection.size} items`);
                              break;
                            case 'move':
                              alert(`Move ${demoValues.treeSelection.size} items`);
                              break;
                            case 'copy':
                              alert(`Copy ${demoValues.treeSelection.size} items`);
                              break;
                          }
                        }}
                        onClearSelection={() => updateValue('treeSelection', new Set())}
                      >
                        <Item key="delete">🗑️ Delete</Item>
                        <Item key="move">📁 Move</Item>
                        <Item key="copy">📋 Copy</Item>
                      </ActionBar>
                    )}
                  </ActionBarContainer>
                </div>
              </Flex>
            </Well>
          </Grid>
        </View>

        {/* Continue with other sections */}
        <View marginTop="size-400" marginX="size-300">
          <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="size-300" marginBottom="size-600">

            {/* Date and Time Components */}
            <Well>
              <Heading level={3}>📅 Date & Time</Heading>
              <Flex direction="column" gap="size-200">
                <div>
                  <Text marginBottom="size-100">DatePicker Component:</Text>
                  <DatePicker 
                    label="Select Event Date"
                    value={demoValues.dateField}
                    onChange={(date) => updateValue('dateField', date)}
                  />
                </div>
                <div>
                  <DateField 
                    label="DateField Component - Enter Date"
                    value={demoValues.dateField}
                    onChange={(date) => updateValue('dateField', date)}
                    width="100%"
                  />
                </div>
                <div>
                  <TimeField 
                    label="TimeField Component - Select Time"
                    value={demoValues.timeField}
                    onChange={(time) => updateValue('timeField', time)}
                    width="100%"
                  />
                </div>
                <div>
                  <Text marginBottom="size-100">DateRangePicker Component:</Text>
                  <DateRangePicker 
                    label="Select Date Range"
                    value={demoValues.dateRange}
                    onChange={(range) => updateValue('dateRange', range)}
                  />
                </div>
                
                <div>
                  <Text marginBottom="size-100">Calendar Component:</Text>
                  <Calendar 
                    aria-label="Event date"
                    value={demoValues.calendarDate}
                    onChange={(date) => updateValue('calendarDate', date)}
                  />
                </div>
                
                <div>
                  <Text marginBottom="size-100">RangeCalendar Component:</Text>
                  <RangeCalendar 
                    aria-label="Trip dates"
                    value={demoValues.rangeCalendarDates}
                    onChange={(range) => updateValue('rangeCalendarDates', range)}
                  />
                </div>
                <div>
                  <Text marginBottom="size-100">Current Values:</Text>
                  <Flex direction="column" gap="size-50">
                    <Text>📅 Selected Date: {demoValues.dateField?.toString() || 'None'}</Text>
                    <Text>⏰ Selected Time: {demoValues.timeField?.toString() || 'None'}</Text>
                    <Text>📋 Date Range: {demoValues.dateRange ? `${demoValues.dateRange.start} - ${demoValues.dateRange.end}` : 'None'}</Text>
                  </Flex>
                </div>
              </Flex>
            </Well>

            {/* Color Components */}
            <Well>
              <Heading level={3}>🎨 Color Tools</Heading>
              <Flex direction="column" gap="size-300">
                <div>
                  <Text marginBottom="size-100">ColorPicker Component:</Text>
                  <ColorPicker 
                    label="Select Color"
                    value={demoValues.colorPicker}
                    onChange={(color) => updateValue('colorPicker', color)}
                  >
                    <ColorEditor />
                  </ColorPicker>
                </div>
                
                <div>
                  <Text marginBottom="size-100">ColorArea Component:</Text>
                  <ColorArea 
                    value={demoValues.colorPicker}
                    onChange={(color) => updateValue('colorPicker', color)}
                    size="size-2400"
                  />
                </div>
                
                <div>
                  <Text marginBottom="size-100">ColorSlider Component:</Text>
                  <ColorSlider 
                    value={demoValues.colorPicker}
                    onChange={(color) => updateValue('colorPicker', color)}
                    channel="red"
                    label="Red Channel"
                  />
                </div>
                
                <div>
                  <Text marginBottom="size-100">ColorWheel Component:</Text>
                  <ColorWheel 
                    value={demoValues.colorPicker}
                    onChange={(color) => updateValue('colorPicker', color)}
                    size="size-2400"
                  />
                </div>
                
                <div>
                  <Text marginBottom="size-100">ColorField Component:</Text>
                  <ColorField 
                    label="Enter Color Value"
                    value={demoValues.colorField}
                    onChange={(value) => updateValue('colorField', value)}
                  />
                </div>
                
                <div>
                  <Text marginBottom="size-100">ColorSwatchPicker Component:</Text>
                  <ColorSwatchPicker 
                    value={demoValues.colorPicker}
                    onChange={(color) => updateValue('colorPicker', color)}
                  >
                    <ColorSwatch color="#ff0000" />
                    <ColorSwatch color="#00ff00" />
                    <ColorSwatch color="#0000ff" />
                    <ColorSwatch color="#ffff00" />
                    <ColorSwatch color="#ff00ff" />
                    <ColorSwatch color="#00ffff" />
                    <ColorSwatch color="#ff8800" />
                    <ColorSwatch color="#8800ff" />
                  </ColorSwatchPicker>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Individual Color Swatches:</Text>
                  <Flex direction="row" gap="size-100" wrap>
                    <ColorSwatch color="#ff0000" />
                    <ColorSwatch color="#00ff00" />
                    <ColorSwatch color="#0000ff" />
                    <ColorSwatch color="#ffff00" />
                    <ColorSwatch color="#ff00ff" />
                    <ColorSwatch color="#00ffff" />
                  </Flex>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Current Color Value:</Text>
                  <Flex direction="column" gap="size-50">
                    <Text>🎨 Hex: {demoValues.colorPicker?.toString('hex') || '#ff0000'}</Text>
                    <Text>🌈 HSL: {demoValues.colorPicker?.toString('hsl') || 'hsl(0, 100%, 50%)'}</Text>
                    <Text>📊 RGB: {demoValues.colorPicker?.toString('rgb') || 'rgb(255, 0, 0)'}</Text>
                  </Flex>
                </div>
              </Flex>
            </Well>

            {/* Navigation Components */}
            <Well>
              <Heading level={3}>🔗 Navigation Components</Heading>
              <Flex direction="column" gap="size-300">
                <div>
                  <Text marginBottom="size-100">Breadcrumbs Navigation:</Text>
                  <Breadcrumbs>
                    <Item key="home">Home</Item>
                    <Item key="components">Components</Item>
                    <Item key="navigation">Navigation</Item>
                    <Item key="current">Current Page</Item>
                  </Breadcrumbs>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Tabs Navigation:</Text>
                  <Tabs 
                    selectedKey={demoValues.selectedTab || 'tab1'}
                    onSelectionChange={(key) => updateValue('selectedTab', key)}
                  >
                    <TabList>
                      <Item key="tab1">Overview</Item>
                      <Item key="tab2">Settings</Item>
                      <Item key="tab3">Analytics</Item>
                      <Item key="tab4">Documentation</Item>
                    </TabList>
                    <TabPanels>
                      <Item key="tab1">
                        <Content marginTop="size-200">
                          <Text><strong>Overview Tab:</strong> This is the main dashboard view with key metrics and summaries.</Text>
                        </Content>
                      </Item>
                      <Item key="tab2">
                        <Content marginTop="size-200">
                          <Text><strong>Settings Tab:</strong> Configure your preferences and application settings here.</Text>
                        </Content>
                      </Item>
                      <Item key="tab3">
                        <Content marginTop="size-200">
                          <Text><strong>Analytics Tab:</strong> View detailed analytics and performance metrics.</Text>
                        </Content>
                      </Item>
                      <Item key="tab4">
                        <Content marginTop="size-200">
                          <Text><strong>Documentation Tab:</strong> Access guides, tutorials, and API documentation.</Text>
                        </Content>
                      </Item>
                    </TabPanels>
                  </Tabs>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Link Components:</Text>
                  <Flex direction="row" gap="size-200" wrap>
                    <Link>🔗 Internal Link</Link>
                    <Link href="https://react-spectrum.adobe.com" target="_blank">🌐 External Link</Link>
                    <Link isQuiet>🔇 Quiet Link</Link>
                  </Flex>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Accordion Component:</Text>
                  <Accordion 
                    defaultExpandedKeys={['section1']}
                    expandedKeys={demoValues.accordionExpanded}
                    onExpandedChange={(keys) => updateValue('accordionExpanded', keys)}
                  >
                    <Disclosure id="section1">
                      <DisclosureTitle>Getting Started</DisclosureTitle>
                      <DisclosurePanel>
                        <Text>Welcome to React Spectrum! This section covers the basics of setting up and using the component library.</Text>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure id="section2">
                      <DisclosureTitle>Configuration</DisclosureTitle>
                      <DisclosurePanel>
                        <Text>Learn how to configure themes, providers, and customize your React Spectrum application.</Text>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure id="section3">
                      <DisclosureTitle>Styling</DisclosureTitle>
                      <DisclosurePanel>
                        <Text>Discover styling options, design tokens, and how to create consistent user interfaces.</Text>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure id="section4">
                      <DisclosureTitle>Advanced Features</DisclosureTitle>
                      <DisclosurePanel>
                        <Text>Explore advanced patterns, accessibility features, and performance optimizations.</Text>
                      </DisclosurePanel>
                    </Disclosure>
                  </Accordion>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Standalone Disclosure Component:</Text>
                  <Disclosure 
                    id="standalone"
                    isExpanded={demoValues.disclosureExpanded}
                    onExpandedChange={(expanded) => updateValue('disclosureExpanded', expanded)}
                  >
                    <DisclosureTitle>Show Details</DisclosureTitle>
                    <DisclosurePanel>
                      <Text>This is additional content that can be shown or hidden using the Disclosure component. It's perfect for FAQ sections, detailed information, or any content that should be collapsible.</Text>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </Flex>
            </Well>

            {/* Overlay Components */}
            <Well>
              <Heading level={3}>💬 Overlay Components</Heading>
              <Flex direction="column" gap="size-300">
                <div>
                  <Text marginBottom="size-100">DialogTrigger + Dialog:</Text>
                  <div>
                    <DialogTrigger 
                      isOpen={demoValues.dialogOpen}
                      onOpenChange={(open) => updateValue('dialogOpen', open)}
                    >
                      <ActionButton>💬 Open Dialog</ActionButton>
                      <Dialog>
                        <Heading>💬 Dialog Example</Heading>
                        <Header>
                          <Text>Dialog Header</Text>
                        </Header>
                        <Divider />
                        <Content>
                          <Text>This is a modal dialog with various content. You can include forms, text, images, and other components here.</Text>
                          <TextField label="Example Input" marginTop="size-200" />
                        </Content>
                        <ButtonGroup>
                          <Button variant="secondary" onPress={() => updateValue('dialogOpen', false)}>Cancel</Button>
                          <Button variant="cta" onPress={() => updateValue('dialogOpen', false)}>Save</Button>
                        </ButtonGroup>
                      </Dialog>
                    </DialogTrigger>
                  </div>
                </div>
                
                <div>
                  <Text marginBottom="size-100">AlertDialog:</Text>
                  <div>
                    <DialogTrigger 
                      isOpen={demoValues.alertDialogOpen}
                      onOpenChange={(open) => updateValue('alertDialogOpen', open)}
                    >
                      <ActionButton variant="negative">⚠️ Show Alert</ActionButton>
                    <AlertDialog 
                      title="Confirm Action"
                      variant="destructive"
                      primaryActionLabel="Delete"
                      cancelLabel="Cancel"
                      onPrimaryAction={() => {
                        alert('Item deleted!');
                        updateValue('alertDialogOpen', false);
                      }}
                      onCancel={() => updateValue('alertDialogOpen', false)}
                    >
                      Are you sure you want to delete this item? This action cannot be undone.
                    </AlertDialog>
                    </DialogTrigger>
                  </div>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Tooltip Components:</Text>
                  <Flex direction="row" gap="size-200" wrap>
                    <TooltipTrigger>
                      <ActionButton>📝 Hover for Tooltip</ActionButton>
                      <Tooltip>This is a helpful tooltip that provides additional information.</Tooltip>
                    </TooltipTrigger>
                    <TooltipTrigger>
                      <ActionButton>📊 Data Tooltip</ActionButton>
                      <Tooltip>Tooltips are great for showing extra context without cluttering the UI.</Tooltip>
                    </TooltipTrigger>
                  </Flex>
                </div>
                
                <div>
                  <Text marginBottom="size-100">ContextualHelp Component:</Text>
                  <Flex direction="row" gap="size-200" alignItems="center">
                    <Text>Need help with this feature?</Text>
                    <ContextualHelp variant="help">
                      <Heading>About This Feature</Heading>
                      <Content>
                        <Text>This contextual help provides detailed information about how to use this feature effectively. It can include tips, examples, and best practices.</Text>
                      </Content>
                    </ContextualHelp>
                  </Flex>
                </div>
              </Flex>
            </Well>

            {/* Pickers - Missing Components */}
            <Well>
              <Heading level={3}>🎯 Pickers & Selection</Heading>
              <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="size-200">
                <div>
                  <ComboBox 
                    label="Fruits ComboBox"
                    selectedKey={demoValues.comboBox}
                    onSelectionChange={(key) => updateValue('comboBox', key)}
                    allowsCustomValue
                  >
                    <Item key="apple">🍎 Apple</Item>
                    <Item key="banana">🍌 Banana</Item>
                    <Item key="orange">🍊 Orange</Item>
                    <Item key="grape">🍇 Grape</Item>
                    <Item key="strawberry">🍓 Strawberry</Item>
                  </ComboBox>
                </div>
                <div>
                  <Picker 
                    label="Color Picker"
                    selectedKey={demoValues.picker}
                    onSelectionChange={(key) => updateValue('picker', key)}
                  >
                    <Item key="red">🔴 Red</Item>
                    <Item key="blue">🔵 Blue</Item>
                    <Item key="green">🟢 Green</Item>
                    <Item key="yellow">🟡 Yellow</Item>
                    <Item key="purple">🟣 Purple</Item>
                  </Picker>
                </div>
              </Grid>
            </Well>

            {/* Content - Missing Components */}
            <Well>
              <Heading level={3}>📄 Content - Advanced</Heading>
              <Flex direction="column" gap="size-300">
                <div>
                  <Text marginBottom="size-100">IllustratedMessage:</Text>
                  <IllustratedMessage>
                    <svg width="150" height="103" viewBox="0 0 150 103">
                      <path d="M133.7,8.5h-118c-1.9,0-3.5,1.6-3.5,3.5v27c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V12C137.2,10.1,135.6,8.5,133.7,8.5z M15.7,35.5V15.5h118v20H15.7z M137.2,47.5c0-1.9-1.6-3.5-3.5-3.5h-118c-1.9,0-3.5,1.6-3.5,3.5v27c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V47.5z M15.7,74.5V54.5h118v20H15.7z M137.2,86.5c0-1.9-1.6-3.5-3.5-3.5h-118c-1.9,0-3.5,1.6-3.5,3.5v8c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V86.5z M15.7,94.5v-8h118v8H15.7z" fill="#6E6E6E"/>
                    </svg>
                    <Heading>No Data Available</Heading>
                    <Content>Try creating a new item or adjusting your filters to see content here.</Content>
                  </IllustratedMessage>
                </div>
                
                <div>
                  <Text marginBottom="size-100">Keyboard Shortcut:</Text>
                  <Flex direction="row" gap="size-100" alignItems="center">
                    <Text>Press </Text>
                    <Keyboard>⌘</Keyboard>
                    <Text> + </Text>
                    <Keyboard>K</Keyboard>
                    <Text> to open command palette</Text>
                  </Flex>
                </div>
              </Flex>
            </Well>

            {/* Form Wrapper */}
            <Well>
              <Heading level={3}>📝 Form Container</Heading>
              <Form maxWidth="400px">
                <TextField label="Full Name" isRequired />
                <TextField label="Email" type="email" isRequired />
                <TextArea label="Message" />
                <Checkbox>I agree to the terms and conditions</Checkbox>
                <ButtonGroup>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="reset">Reset</Button>
                </ButtonGroup>
              </Form>
            </Well>

            {/* Icons Section */}
            <Well>
              <Heading level={3}>🎭 Icons & Symbols</Heading>
              <Flex direction="column" gap="size-200">
                <div>
                  <Text marginBottom="size-100">Workflow Icons:</Text>
                  <Flex direction="row" gap="size-200" wrap alignItems="center">
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <FolderIcon aria-label="Folder" size="L" />
                      <Text size="XS">Folder</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <DocumentIcon aria-label="Document" size="L" />
                      <Text size="XS">Document</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <SettingsIcon aria-label="Settings" size="L" />
                      <Text size="XS">Settings</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <UserIcon aria-label="User" size="L" />
                      <Text size="XS">User</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <SearchIcon aria-label="Search" size="L" />
                      <Text size="XS">Search</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <HeartIcon aria-label="Heart" size="L" />
                      <Text size="XS">Heart</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <StarIcon aria-label="Star" size="L" />
                      <Text size="XS">Star</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <BellIcon aria-label="Bell" size="L" />
                      <Text size="XS">Bell</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <EmailIcon aria-label="Email" size="L" />
                      <Text size="XS">Email</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <HomeIcon aria-label="Home" size="L" />
                      <Text size="XS">Home</Text>
                    </Flex>
                  </Flex>
                </div>
                <div>
                  <Text marginBottom="size-100">Icon Sizing Examples:</Text>
                  <Flex direction="row" gap="size-200" wrap alignItems="center">
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <FolderIcon aria-label="Small Folder" size="S" />
                      <Text size="XS">Size S</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <DocumentIcon aria-label="Medium Document" size="M" />
                      <Text size="XS">Size M</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <SettingsIcon aria-label="Large Settings" size="L" />
                      <Text size="XS">Size L</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" gap="size-50">
                      <UserIcon aria-label="XL User" size="XL" />
                      <Text size="XS">Size XL</Text>
                    </Flex>
                  </Flex>
                </div>
                <div>
                  <Text marginBottom="size-100">Additional Icons Available:</Text>
                  <Text>React Spectrum includes 200+ Workflow icons for various use cases including: Design, Code, Launch, Analytics, Security, Performance, and many more. Icons automatically adapt to the current theme and support all accessibility features.</Text>
                </div>
              </Flex>
            </Well>

            {/* Drag & Drop Components */}
            <Well>
              <Heading level={3}>📦 Drag & Drop</Heading>
              <Flex direction="column" gap="size-200">
                <div>
                  <Text marginBottom="size-100">DropZone Component:</Text>
                  <DropZone 
                    onDrop={(e) => {
                      const files = Array.from(e.dataTransfer.files);
                      alert(`Dropped ${files.length} file(s): ${files.map(f => f.name).join(', ')}`);
                    }}
                  >
                    <IllustratedMessage>
                      <svg width="150" height="103" viewBox="0 0 150 103">
                        <path d="M133.7,8.5h-118c-1.9,0-3.5,1.6-3.5,3.5v27c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V23.5h119V92c0,0.3-0.2,0.5-0.5,0.5h-118c-0.3,0-0.5-0.2-0.5-0.5V69c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v23c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V12C137.2,10.1,135.6,8.5,133.7,8.5z M15.2,21.5V12c0-0.3,0.2-0.5,0.5-0.5h118c0.3,0,0.5,0.2,0.5,0.5v9.5H15.2z M32.9,16.5c0,0.6-0.4,1-1,1h-10c-0.6,0-1-0.4-1-1s0.4-1,1-1h10C32.5,15.5,32.9,15.9,32.9,16.5z M13.9,56.1l5.6-5.6c0.6-0.6,1.5-0.6,2.1,0L34,63.1l22.4-22.4c0.6-0.6,1.5-0.6,2.1,0l5.6,5.6c0.6,0.6,0.6,1.5,0,2.1L35.6,76.9c-0.6,0.6-1.5,0.6-2.1,0L13.9,58.3C13.3,57.7,13.3,56.7,13.9,56.1z" fill="#6E6E6E"/>
                      </svg>
                      <Heading>Drop files here</Heading>
                      <Content>Or click to browse files</Content>
                    </IllustratedMessage>
                  </DropZone>
                </div>
                <div>
                  <Text>Try dragging and dropping files onto the drop zone above, or click to browse files.</Text>
                </div>
              </Flex>
            </Well>
          </Grid>
        </View>

        {/* Footer */}
        <Divider size="M" marginY="size-400" marginX="size-300" />
        <Footer marginX="size-300" paddingY="size-300">
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Text size="S">🎨 React Spectrum Complete Component Showcase - Built with Parcel</Text>
            <Flex direction="row" gap="size-100">
              <Badge variant="info">v1.0</Badge>
              <StatusLight variant="positive">Live</StatusLight>
            </Flex>
          </Flex>
        </Footer>
      </View>
    </Provider>
  );
}

export default App;
